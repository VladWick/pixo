package com.vladwick.orderservice.service;

import com.vladwick.orderservice.dto.InventoryResponse;
import com.vladwick.orderservice.dto.OrderLineItemsDto;
import com.vladwick.orderservice.dto.OrderRequest;
import com.vladwick.orderservice.dto.OrderResponse;
import com.vladwick.orderservice.event.OrderPlacedEvent;
import com.vladwick.orderservice.model.Order;
import com.vladwick.orderservice.model.OrderLineItems;
import com.vladwick.orderservice.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;

    private final WebClient.Builder webClientBuilder;

    private final KafkaTemplate<String, OrderPlacedEvent> kafkaTemplate;

    public String placeOrder(OrderRequest orderRequest) {
        Order order = new Order();
        order.setOrderNumber(UUID.randomUUID().toString());

        List<OrderLineItems> orderLineItems = orderRequest.getOrderLineItemsDtoList()
                .stream()
                .map(this::mapToDto)
                .toList();

        order.setOrderLineItems(orderLineItems);

        List<String> skuCodes = order.getOrderLineItems().stream().map(OrderLineItems::getSkuCode).toList();
        InventoryResponse[] inventoryResponseArray = webClientBuilder.build().get()
                .uri("http://inventory-service/api/inventory",
                        uriBuilder -> uriBuilder.queryParam("skuCodes", skuCodes).build())
                .retrieve()
                .bodyToMono(InventoryResponse[].class)
                .block();

        boolean allProductsInStock = Arrays.stream(inventoryResponseArray).allMatch(InventoryResponse::isInStock);
        if (allProductsInStock) {
            orderRepository.save(order);
            kafkaTemplate.send("notificationTopic", new OrderPlacedEvent(order.getOrderNumber()));
            return "Order placed successfully!";
        } else {
            throw new IllegalArgumentException("Some product not in stock, please try again later!");
        }
    }

    private OrderLineItems mapToDto(OrderLineItemsDto orderLineItemsDto) {
        OrderLineItems orderLineItems = new OrderLineItems();
        orderLineItems.setQuantity(orderLineItemsDto.getQuantity());
        orderLineItems.setPrice(orderLineItemsDto.getPrice());
        orderLineItems.setSkuCode(orderLineItemsDto.getSkuCode());
        return orderLineItems;
    }

    public List<OrderResponse> getAllOrders() {

        List<Order> orders = orderRepository.findAll();

        List<OrderResponse> ordersResponses = orders
                .stream()
                .map(this::mapOrderToResponse)
                .toList();

        return ordersResponses;
    }

    private OrderResponse mapOrderToResponse(Order order) {
        OrderResponse response = new OrderResponse();
        response.setId(order.getId());
        response.setOrderNumber(order.getOrderNumber());
        response.setOrderLineItems(order.getOrderLineItems());
        return response;
    }

    public Order getOrderById(Long orderId) {
        return orderRepository.getById(orderId);
    }

    public List<Order> searchByStringIn(String str) {
        return orderRepository.findAllByOrderNumberLike(str);
    }

    public List<Order> searchByStringInInAllProducts(String word) {
        List<Order> orders = new ArrayList<>();
        for(Order order: orderRepository.findAll()) {
            List<OrderLineItems> items = order.getOrderLineItems();
            for(OrderLineItems item: items) {
                if (item.getSkuCode().equals(word)) {
                    orders.add(order);
                    break;
                }
            }
        }
        return orders;
    }
}
