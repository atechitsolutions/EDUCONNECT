package com.ALL_in_one.studyabroad.controller;


import com.ALL_in_one.studyabroad.dto.InstitutionRequest;
import com.ALL_in_one.studyabroad.dto.InstitutionResponse;

import com.ALL_in_one.studyabroad.service.InstitutionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/institution")
public class InstitutionController {

    private final InstitutionService institutionService;

    @PostMapping
    public ResponseEntity<InstitutionResponse> createInstitution(@RequestBody  InstitutionRequest institutionRequest){

      InstitutionResponse response = institutionService.createInstitution(institutionRequest);

      return new ResponseEntity<>(response , HttpStatus.CREATED);


    }
     @GetMapping
    public ResponseEntity<List<InstitutionResponse>> getAllInstitutions(){

        List<InstitutionResponse> responses = institutionService.getAllInstitutions();

        return new ResponseEntity<>(responses , HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<InstitutionResponse> getInstitutionById(@PathVariable Long id){
        InstitutionResponse response = institutionService.getInstitutionById(id);
        return new ResponseEntity<>(response , HttpStatus.OK);
    }

    @PutMapping("/{id}")
     public ResponseEntity<InstitutionResponse> updateInstitution(@PathVariable Long id , @RequestBody InstitutionRequest institutionRequest){

        InstitutionResponse updatedresponse = institutionService.updateInstitution(id , institutionRequest);

        return new ResponseEntity<>(updatedresponse , HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInstitution(@PathVariable  Long id){
         institutionService.deleteInstitution(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
