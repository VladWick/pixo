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
@Table(name = "ORDERS")
public class OrderModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GEN_SEQ_ORDERS")
    @SequenceGenerator(name = "GEN_SEQ_ORDERS", sequenceName = "SEQ_ORDERS", allocationSize = 1)
    @Column(name = "ID", nullable = false)
    private Long id;

    @Column(name = "USER_ID")
    private String userId;

}
