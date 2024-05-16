package com.vladwick.orderservice.service;

import com.vladwick.orderservice.dto.*;
import com.vladwick.orderservice.event.OrderPlacedEvent;
import com.vladwick.orderservice.model.OrderModel;
import com.vladwick.orderservice.model.OrderProductsModel;
import com.vladwick.orderservice.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Errors;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderProductsService orderProductsService;
    private final ApplicationEventPublisher applicationEventPublisher;

    public Long placeOrder(OrderRequest form, Errors errors) {
        OrderModel order = new OrderModel();
        order.setUserId(form.getUserId());
        Long orderId = orderRepository.save(order).getId();

        List<ProductInOrder> productsInOrder = form.getProductsInOrder();

        for (ProductInOrder product: productsInOrder) {
            OrderProductsModel orderProduct = new OrderProductsModel();
            orderProduct.setProductId(product.getProductId());
            orderProduct.setAmount(product.getAmount());
            orderProduct.setWishes(product.getWishes());
            orderProduct.setFinalPrice(product.getFinalPrice());
            orderProduct.setOrderId(orderId);
            orderProductsService.save(orderProduct);
        }

        // kafka
        applicationEventPublisher.publishEvent(new OrderPlacedEvent(this, order.getId().toString()));

        return orderId;
    }

    public List<OrderResponse> getAllByUserId(String userId) {
        List<OrderResponse> response = new ArrayList<>();
        List<OrderModel> orders = orderRepository.getAllByUserId(userId);

        for (OrderModel order: orders) {
            OrderResponse orderResponse = new OrderResponse();

            orderResponse.setUserId(order.getUserId());
            orderResponse.setOrderId(order.getId());

            List<ProductInOrder> products = new ArrayList<>();
            List<OrderProductsModel> orderProducts = orderProductsService.getAllByOrderId(order.getId());
            for (OrderProductsModel orderProduct: orderProducts) {
                ProductInOrder productInOrder = new ProductInOrder();
                productInOrder.setAmount(orderProduct.getAmount());
                productInOrder.setWishes(orderProduct.getWishes());
                productInOrder.setFinalPrice(orderProduct.getFinalPrice());
                productInOrder.setProductId(orderProduct.getProductId());
                products.add(productInOrder);
            }
            orderResponse.setProductsInOrder(products);

            response.add(orderResponse);
        }

        return response;
    }

    public List<OrderResponse> getAll() {
        List<OrderModel> orders = orderRepository.findAll();

        List<OrderResponse> result = new ArrayList<>();

        for (OrderModel order: orders) {
            OrderResponse resp = new OrderResponse();
            resp.setOrderId(order.getId());
            resp.setUserId(order.getUserId());

            List<OrderProductsModel> products = orderProductsService.getAllByOrderId(order.getId());
            List<ProductInOrder> productsInOrder = new ArrayList<>();
            for (OrderProductsModel product: products) {
                ProductInOrder productInOrder = new ProductInOrder();
                productInOrder.setProductId(product.getId());
                productInOrder.setAmount(product.getAmount());
                productInOrder.setFinalPrice(product.getFinalPrice());
                productInOrder.setWishes(product.getWishes());

                productsInOrder.add(productInOrder);
            }

            resp.setProductsInOrder(productsInOrder);
            result.add(resp);
        }

        return result;
    }


    //    private final WebClient.Builder webClientBuilder;
//
//    private final KafkaTemplate<String, OrderPlacedEvent> kafkaTemplate;

//    public String placeOrder(OrderRequest orderRequest) {
//        Order order = new Order();
//        order.setOrderNumber(UUID.randomUUID().toString());
//
//        List<OrderLineItems> orderLineItems = orderRequest.getOrderLineItemsDtoList()
//                .stream()
//                .map(this::mapToDto)
//                .toList();
//
//        order.setOrderLineItems(orderLineItems);
//
//        List<String> skuCodes = order.getOrderLineItems().stream().map(OrderLineItems::getSkuCode).toList();
//        InventoryResponse[] inventoryResponseArray = webClientBuilder.build().get()
//                .uri("http://inventory-service/api/inventory",
//                        uriBuilder -> uriBuilder.queryParam("skuCodes", skuCodes).build())
//                .retrieve()
//                .bodyToMono(InventoryResponse[].class)
//                .block();
//
//        boolean allProductsInStock = Arrays.stream(inventoryResponseArray).allMatch(InventoryResponse::isInStock);
//        if (allProductsInStock) {
//            orderRepository.save(order);
//            kafkaTemplate.send("notificationTopic", new OrderPlacedEvent(order.getOrderNumber()));
//            return "Order placed successfully!";
//        } else {
//            throw new IllegalArgumentException("Some product not in stock, please try again later!");
//        }
//    }
//
//    private OrderLineItems mapToDto(OrderLineItemsDto orderLineItemsDto) {
//        OrderLineItems orderLineItems = new OrderLineItems();
//        orderLineItems.setQuantity(orderLineItemsDto.getQuantity());
//        orderLineItems.setPrice(orderLineItemsDto.getPrice());
//        orderLineItems.setSkuCode(orderLineItemsDto.getSkuCode());
//        return orderLineItems;
//    }
//
//    public List<OrderResponse> getAllOrders() {
//
//        List<Order> orders = orderRepository.findAll();
//
//        List<OrderResponse> ordersResponses = orders
//                .stream()
//                .map(this::mapOrderToResponse)
//                .toList();
//
//        return ordersResponses;
//    }
//
//    private OrderResponse mapOrderToResponse(Order order) {
//        OrderResponse response = new OrderResponse();
//        response.setId(order.getId());
//        response.setOrderNumber(order.getOrderNumber());
//        response.setOrderLineItems(order.getOrderLineItems());
//        return response;
//    }
//
//    public Order getOrderById(Long orderId) {
//        return orderRepository.getById(orderId);
//    }
//
//    public List<Order> searchByStringIn(String str) {
//        return orderRepository.findAllByOrderNumberLike(str);
//    }
//
//    public List<Order> searchByStringInInAllProducts(String word) {
//        List<Order> orders = new ArrayList<>();
//        for(Order order: orderRepository.findAll()) {
//            List<OrderLineItems> items = order.getOrderLineItems();
//            for(OrderLineItems item: items) {
//                if (item.getSkuCode().equals(word)) {
//                    orders.add(order);
//                    break;
//                }
//            }
//        }
//        return orders;
//    }
}
