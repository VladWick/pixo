package com.vladwick.orderservice.event;

import com.vladwick.orderservice.service.OrderService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderPlacedEvent {
    private String orderNumber;

    public OrderPlacedEvent(OrderService orderService, String id) {
    }
}
