package com.vladwick.orderservice.dto;

import lombok.Data;

@Data
public class ProductInOrder {
    private Long productId;
    private Long amount;
    private String wishes;
    private Long finalPrice;
}
