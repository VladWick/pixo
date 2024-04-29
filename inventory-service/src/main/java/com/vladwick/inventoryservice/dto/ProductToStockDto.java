package com.vladwick.inventoryservice.dto;

import lombok.Data;

@Data
public class ProductToStockDto {

    private String skuCode;
    private Long quantity;

}
