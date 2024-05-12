package com.vladwick.orderservice.controller;

import com.vladwick.orderservice.dto.OrderRequest;
import com.vladwick.orderservice.dto.OrderResponse;
import com.vladwick.orderservice.model.OrderModel;
import com.vladwick.orderservice.service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/order")
@RequiredArgsConstructor
@Slf4j
public class OrderController {

    private final OrderService orderService;

    @PostMapping("place")
    @ResponseStatus(HttpStatus.CREATED)
    public Long placeOrder(OrderRequest form, Errors errors) {
        Long orderId = orderService.placeOrder(form, errors);
//        check(errors);
        return orderId;
    }

    @GetMapping("{userId}")
    public List<OrderResponse> getAllByUserId(String userId) {
        return orderService.getAllByUserId(userId);
    }


//    @PostMapping()
//    @ResponseStatus(HttpStatus.CREATED)
////    @CircuitBreaker(name="inventory", fallbackMethod = "fallbackMethod")
//    @TimeLimiter(name="inventory")
//    @Retry(name="inventory")
//    public CompletableFuture<String> placeOrder(@RequestBody OrderRequest orderRequest) {
//        log.info("Placing order...");
//        return CompletableFuture.supplyAsync(() -> orderService.placeOrder(orderRequest));
//    }
//
//    @GetMapping("")
//    @ResponseStatus(HttpStatus.OK)
//    public List<OrderResponse> getAllOrders() {
//        return orderService.getAllOrders();
//    }
//
//    @GetMapping("{orderId}")
//    public Order getById(@PathVariable("orderId") Long orderId) {
//        return orderService.getOrderById(orderId);
//    }
//
//    @GetMapping("/search/number")
//    public List<Order> searchByStringInOrderNumber(@RequestParam String word) {
//        return orderService.searchByStringIn(word);
//    }
//
//    @GetMapping("/search/products")
//    public List<Order> searchByStringInAllProducts(@RequestParam String word) {
//        return orderService.searchByStringInInAllProducts(word);
//    }
//
//    public CompletableFuture<String> fallbackMethod(OrderRequest orderRequest, RuntimeException runtimeException) {
//        return CompletableFuture.supplyAsync(() -> "Oops, something went wrong!");
//    }

}
