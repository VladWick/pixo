package com.vladwick.orderservice.dto;

import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequest {

    private String userId;

    private List<ProductInOrder> productsInOrder;
}
