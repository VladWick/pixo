package com.vladwick.productservice.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "CATEGORIES")
public class CategoryModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GEN_SEQ_CATEGORIES")
    @SequenceGenerator(name = "GEN_SEQ_CATEGORIES", sequenceName = "SEQ_CATEGORIES", allocationSize = 1)
    @Column(name = "ID", nullable = false)
    private Long id;

    @Column(name = "CATEGORY_CODE")
    private String code;

    @Column(name = "CATEGORY_TITLE")
    private String title;

}
