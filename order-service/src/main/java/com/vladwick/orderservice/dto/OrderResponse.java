package com.vladwick.orderservice.dto;

import lombok.Data;

import java.util.List;

@Data
public class OrderResponse {
    private Long orderId;
    private String userId;
    private List<ProductInOrder> productsInOrder;
}
