package com.ALL_in_one.studyabroad.dto;


import com.ALL_in_one.studyabroad.enums.InstitutionType;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class InstitutionResponse {


   private Long  id;

   private String name;
   private String description;

   private String address;
    private String city;
    private String state;
    private String country;
    private String countryCode;

    private String website;
    private String email;
    private String phone;

    private String coverImageUrl;

    private InstitutionType type;

    private boolean studyAbroadEnabled;
    private boolean active;
    private boolean verified;

    private LocalDateTime createdAt;
    private LocalDateTime  updatedAt;
}
