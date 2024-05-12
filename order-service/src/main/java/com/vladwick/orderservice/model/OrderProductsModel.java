package com.vladwick.orderservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "ORDER_PRODUCTS")
public class OrderProductsModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GEN_SEQ_ORDER_PRODUCTS")
    @SequenceGenerator(name = "GEN_SEQ_ORDER_PRODUCTS", sequenceName = "SEQ_ORDER_PRODUCTS", allocationSize = 1)
    @Column(name = "ID", nullable = false)
    private Long id;

    @Column(name = "PRODUCT_ID")
    private Long productId;

    @Column(name = "ORDER_ID")
    private Long orderId;

    @Column(name = "AMOUNT")
    private Long amount;

    @Column(name = "FINAL_PRICE")
    private Long finalPrice;

    @Column(name = "WISHES")
    private String wishes;

}
