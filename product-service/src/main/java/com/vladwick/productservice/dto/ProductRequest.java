package com.vladwick.productservice.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@Data
public class ProductRequest {
    private Long id;
    private String title;
    private String description;
    private Long price;
    private Long categoryId;
    private Date createDate;
    private Date lastUpdateDate;
    private Long amountInStock;
    private Long sellerId;
    private Boolean isConfirmForSale;
    private MultipartFile image;
}
