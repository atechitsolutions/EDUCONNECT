package com.ALL_in_one.studyabroad.dto;


import com.ALL_in_one.studyabroad.enums.InstitutionType;
import lombok.Data;

@Data
public class SearchResult {

      private Long id;
      private String name;
      private String description;
      private String city;
      private String state;
      private String country;
      private String countryCode;
      private String website;
      private String coverImageUrl;
      private InstitutionType type;
      private boolean verified;
}

