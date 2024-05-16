package com.vladwick.userservice.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "REVIEWS")
@Data
public class ReviewModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GEN_SEQ_REVIEWS")
    @SequenceGenerator(name = "GEN_SEQ_REVIEWS", sequenceName = "SEQ_REVIEWS", allocationSize = 1)
    @Column(name = "ID", nullable = false)
    private Long id;

    @Column(name = "USER_ID")
    private String userId;

    @Column(name = "PRODUCT_ID")
    private Long productId;

    @Column(name = "REVIEW_TEXT")
    private String text;
}
