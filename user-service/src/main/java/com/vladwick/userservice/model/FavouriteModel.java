package com.vladwick.userservice.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "FAVOURITES")
@Data
public class FavouriteModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GEN_SEQ_FAVOURITES")
    @SequenceGenerator(name = "GEN_SEQ_FAVOURITES", sequenceName = "SEQ_FAVOURITES", allocationSize = 1)
    @Column(name = "ID", nullable = false)
    private Long id;

    @Column(name = "USER_ID")
    private String userId;

    @Column(name = "PRODUCT_ID")
    private Long productId;

}
