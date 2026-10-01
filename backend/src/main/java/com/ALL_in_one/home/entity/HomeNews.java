package com.ALL_in_one.home.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "news")

@Getter
@Setter

public class HomeNews {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(
nullable = false,
length = 200
    )
    private Long id;
    @Column(
            nullable = false,
            length = 200
    )

    private String title;

    @Column(
            nullable = false,
            length = 250
            )

    private String subtitle;

    @Column(
            nullable = false,
            length = 1500

    )


    private String description;
    @Column(
            nullable = false,
    length = 10
            )
    private Float rating;
    @Column(
            nullable = false,
    length = 10
            )
    private Float review;
    @Column(
            nullable = false
            )
    String imageUrl;
    @Column(
            nullable = false,
    length = 20
            )
    private String country;
    @Column(
            nullable = false,
    length = 20
            )
    private String category;
    @Column(
            nullable = false,
    length = 10
            )
    private LocalDateTime createdat ;
    @Column(
            nullable = false,
    length = 10
            )
    private LocalDateTime udatedat;


    }




