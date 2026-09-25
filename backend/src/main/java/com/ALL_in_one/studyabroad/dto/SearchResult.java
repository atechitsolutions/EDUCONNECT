package com.ALL_in_one.studyabroad.dto;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class SearchResult {
      @Id
      @GeneratedValue (strategy = GenerationType.IDENTITY)
      private Long id;
      private String name;
      private String description;
      private String city;
      private String state;
      private String country;
      private String countryCode;
      private String website;
      private String coverImageUrl;
      private String type;
      private boolean verified;
}

