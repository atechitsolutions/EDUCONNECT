package com.ALL_in_one.studyabroad.mapper;


import com.ALL_in_one.studyabroad.dto.InstitutionRequest;
import com.ALL_in_one.studyabroad.dto.InstitutionResponse;
import com.ALL_in_one.studyabroad.entity.Institution;
import org.springframework.stereotype.Component;

@Component
public class InstitutionMapper {

    public Institution toEntity(InstitutionRequest request){

        Institution institution = new Institution();
        institution.setName(request.getName());
        institution.setDescription(request.getDescription());
        institution.setAddress(request.getAddress());
        institution.setCity(request.getCity());
        institution.setState(request.getState());
        institution.setCountry(request.getCountry());
        institution.setCountryCode(request.getCountryCode());
        institution.setWebsite(request.getWebsite());
        institution.setEmail(request.getEmail());
        institution.setPhone(request.getPhone());
        institution.setCoverImageUrl(request.getCoverImageUrl());
        institution.setType(request.getType());
        institution.setStudyAbroadEnabled(request.isStudyAbroadEnabled());
        institution.setActive(request.isActive());
        institution.setVerified(request.isVerified());

        return institution;

    }

    public InstitutionResponse toResponse(Institution institution){

        InstitutionResponse response = new InstitutionResponse();

        response.setId(institution.getId());
        response.setName(institution.getName());
        response.setDescription(institution.getDescription());
        response.setAddress(institution.getAddress());
        response.setCity(institution.getCity());
        response.setState(institution.getState());
        response.setCountry(institution.getCountry());
        response.setCountryCode(institution.getCountryCode());
        response.setWebsite(institution.getWebsite());
        response.setEmail(institution.getEmail());
        response.setPhone(institution.getPhone());
        response.setCoverImageUrl(institution.getCoverImageUrl());
        response.setType(institution.getType());
        response.setStudyAbroadEnabled(institution.isStudyAbroadEnabled());
        response.setActive(institution.isActive());
        response.setVerified(institution.isVerified());
        response.setCreatedAt(institution.getCreatedAt());
        response.setUpdatedAt(institution.getUpdatedAt());

        return response;

    }


}
