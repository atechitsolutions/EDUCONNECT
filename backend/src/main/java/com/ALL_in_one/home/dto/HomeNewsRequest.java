package com.ALL_in_one.home.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record HomeNewsRequest(
        @NotBlank @Size(max = 200) String title,
        @Size(max = 250) String subtitle,
        @NotBlank @Size(max = 2000) String description,
        @NotBlank @Size(max = 80) String category,
        @Size(max = 80) String country,
        @Size(max = 1000) String imageUrl,
        @Size(max = 1000) String sourceUrl,
        @NotNull Boolean published
) {}
