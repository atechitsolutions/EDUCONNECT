package com.ALL_in_one.config;

import com.ALL_in_one.studyabroad.entity.Institution;
import com.ALL_in_one.studyabroad.enums.InstitutionType;
import com.ALL_in_one.studyabroad.repository.InstitutionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

/** Imports the supplied destination list without overwriting institution details managed by the admin. */
@Configuration
public class StudyAbroadInstitutionSeeder {

    @Bean
    CommandLineRunner seedStudyAbroadInstitutions(InstitutionRepository repository) {
        return args -> {
            List<Institution> newInstitutions = new ArrayList<>();
            List<Institution> updatedInstitutions = new ArrayList<>();
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(
                    new ClassPathResource("study-abroad-institutions.csv").getInputStream(),
                    StandardCharsets.UTF_8))) {
                String row;
                while ((row = reader.readLine()) != null) {
                    if (row.isBlank() || row.startsWith("#")) continue;
                    String[] fields = row.split("\\|", -1);
                    if (fields.length < 4 || fields.length > 5) {
                        throw new IllegalStateException("Invalid Study Abroad seed row: " + row);
                    }

                    String country = fields[0].trim();
                    String countryCode = fields[1].trim();
                    String name = fields[2].trim();
                    InstitutionType type = InstitutionType.valueOf(fields[3].trim());
                    var existing = repository.findByNameIgnoreCaseAndCountryIgnoreCase(name, country);
                    if (existing.isPresent()) {
                        Institution institution = existing.get();
                        institution.setName(name);
                        institution.setCountry(country);
                        institution.setCountryCode(countryCode);
                        if (fields.length == 5) institution.setDescription(fields[4].trim());
                        institution.setType(type);
                        institution.setStudyAbroadEnabled(true);
                        institution.setActive(true);
                        updatedInstitutions.add(institution);
                        continue;
                    }

                    Institution institution = new Institution();
                    institution.setName(name);
                    institution.setCountry(country);
                    institution.setCountryCode(countryCode);
                    institution.setType(type);
                    institution.setDescription(fields.length == 5 ? fields[4].trim() : null);
                    institution.setStudyAbroadEnabled(true);
                    institution.setActive(true);
                    institution.setVerified(false);
                    newInstitutions.add(institution);
                }
            }

            if (!newInstitutions.isEmpty()) {
                repository.saveAll(newInstitutions);
                System.out.println("Added " + newInstitutions.size() + " Study Abroad institutions from the supplied destination list.");
            }
            if (!updatedInstitutions.isEmpty()) {
                repository.saveAll(updatedInstitutions);
                System.out.println("Enabled " + updatedInstitutions.size() + " existing institutions from the supplied destination list.");
            }
        };
    }
}
