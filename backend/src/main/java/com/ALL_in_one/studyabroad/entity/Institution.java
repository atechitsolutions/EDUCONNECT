package com.ALL_in_one.studyabroad.entity;


import com.ALL_in_one.studyabroad.enums.InstitutionType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "institution")
@Getter
@Setter
public class Institution {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    @Enumerated(EnumType.STRING)
    private InstitutionType type;

    private boolean studyAbroadEnabled;
    private boolean  active;
    private boolean verified;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    @PrePersist
  protected void onCreate(){
        LocalDateTime now = LocalDateTime.now();
        createdAt = now;
        updatedAt = now;
    }
    @PreUpdate
       protected void onUpdate(){
        updatedAt = LocalDateTime.now();
   }

}
