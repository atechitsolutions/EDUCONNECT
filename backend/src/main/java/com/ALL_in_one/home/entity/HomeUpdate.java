package com.ALL_in_one.home.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name="newsupdate")
@Getter
@Setter
public class HomeUpdate {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(
            nullable = false

    )
    private Long id;
    @Column(
            nullable = false,
            length = 200

    )
    private String title;
    @Column(
          nullable = false,
            length = 1000
    )
    private String description;
    @Column(
            nullable = false,
            length = 250
    )
    private String subtitle;


    @Column(
            nullable = false,
            length = 250
    )
    private Float review;
    @Column(
            nullable = false,
            length = 250
    )
    private Float rating;
    @Column(
            nullable = false
    )
    String imageUrl;
    @Column(
            nullable = false,
            length = 250
    )
    private LocalDateTime updatedat;


}
