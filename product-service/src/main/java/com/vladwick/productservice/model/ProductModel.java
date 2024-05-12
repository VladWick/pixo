package com.vladwick.productservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "PRODUCTS")
public class ProductModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GEN_SEQ_PRODUCTS")
    @SequenceGenerator(name = "GEN_SEQ_PRODUCTS", sequenceName = "SEQ_PRODUCTS", allocationSize = 1)
    @Column(name = "ID", nullable = false)
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "PRICE")
    private Long price;

    @Column(name = "CATEGORY_ID")
    private Long categoryId;

    @Column(name = "CREATE_DATE")
    private Date createDate;

    @Column(name = "LAST_UPDATE_DATE")
    private Date lastUpdateDate;

    @Column(name = "AMOUNT_IN_STOCK")
    private Long amountInStock;

    @Column(name = "SELLER_ID")
    private String sellerId;

    @Column(name = "IS_CONFIRM_FOR_SALE")
    private Boolean isConfirmForSale;

    @Column(name = "IMAGE_ID")
    private Long imageId;

}
