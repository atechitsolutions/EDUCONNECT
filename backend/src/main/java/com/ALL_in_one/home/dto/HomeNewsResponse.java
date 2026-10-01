package com.ALL_in_one.home.dto;

import java.time.LocalDateTime;

public record HomeNewsResponse(Long id, String title, String subtitle,
        String description, String category, String country, String imageUrl,
        String sourceUrl, boolean published, LocalDateTime createdAt,
        LocalDateTime updatedAt) {}
