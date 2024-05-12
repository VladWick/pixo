package com.vladwick.productservice.model;

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
@Table(name = "IMAGES")
public class ImageModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GEN_SEQ_IMAGES")
    @SequenceGenerator(name = "GEN_SEQ_IMAGES", sequenceName = "SEQ_IMAGES", allocationSize = 1)
    @Column(name = "ID", nullable = false)
    private Long id;

    @Lob
    @Column(name = "CONTENT", nullable = false)
    private byte[] content;

    @Column(name = "NAME", nullable = false)
    private String name;

}
