package com.ALL_in_one.studyabroad.service;

import com.ALL_in_one.studyabroad.dto.SuggestionResponse;
import com.ALL_in_one.studyabroad.entity.Institution;
import com.ALL_in_one.studyabroad.enums.InstitutionType;
import com.ALL_in_one.studyabroad.repository.InstitutionSearchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class SuggestionService {

    private static final int MAX_SUGGESTIONS = 10;
    private static final int MAX_INSTITUTIONS_TO_CHECK = 10;

    private final InstitutionSearchRepository institutionSearchRepository;


    public SuggestionResponse getSuggestions(String query) {

        String normalizedQuery =
                query == null ? "" : query.trim();


        SuggestionResponse response =
                new SuggestionResponse();

        response.setQuery(normalizedQuery);


        if (normalizedQuery.isBlank()) {

            response.setSuggestions(List.of());

            return response;
        }


        List<Institution> institutions =
                institutionSearchRepository
                        .searchActiveInstitutions(
                                normalizedQuery,
                                PageRequest.of(
                                        0,
                                        MAX_INSTITUTIONS_TO_CHECK
                                )
                        );


        Set<String> suggestions =
                new LinkedHashSet<>();


        for (Institution institution : institutions) {

            addInstitutionSuggestions(
                    suggestions,
                    institution,
                    normalizedQuery
            );


            if (suggestions.size()
                    >= MAX_SUGGESTIONS) {

                break;
            }
        }


        response.setSuggestions(
                suggestions.stream()
                        .limit(MAX_SUGGESTIONS)
                        .toList()
        );

        return response;
    }


    private void addInstitutionSuggestions(
            Set<String> suggestions,
            Institution institution,
            String query) {


        /*
         * Institution name
         *
         * Example:
         * University of Toronto
         */
        addMatchingSuggestion(
                suggestions,
                institution.getName(),
                query
        );


        /*
         * City
         *
         * Example:
         * Toronto
         */
        addMatchingSuggestion(
                suggestions,
                institution.getCity(),
                query
        );


        /*
         * State / region
         *
         * Example:
         * Ontario
         */
        addMatchingSuggestion(
                suggestions,
                institution.getState(),
                query
        );


        /*
         * Country
         *
         * Example:
         * Canada
         */
        addMatchingSuggestion(
                suggestions,
                institution.getCountry(),
                query
        );


        /*
         * Generated city suggestions.
         */
        addLocationTypeSuggestions(
                suggestions,
                institution.getCity(),
                institution.getType(),
                query
        );


        /*
         * Generated state / region suggestions.
         */
        addLocationTypeSuggestions(
                suggestions,
                institution.getState(),
                institution.getType(),
                query
        );


        /*
         * Generated country suggestions.
         */
        addLocationTypeSuggestions(
                suggestions,
                institution.getCountry(),
                institution.getType(),
                query
        );
    }


    private void addLocationTypeSuggestions(
            Set<String> suggestions,
            String location,
            InstitutionType type,
            String query) {


        if (location == null || location.isBlank()) {
            return;
        }


        if (type == InstitutionType.UNIVERSITY) {

            addMatchingSuggestion(
                    suggestions,
                    "Universities in " + location,
                    query
            );
        }


        if (type == InstitutionType.COLLEGE) {

            addMatchingSuggestion(
                    suggestions,
                    "Colleges in " + location,
                    query
            );
        }
    }


    private void addMatchingSuggestion(
            Set<String> suggestions,
            String value,
            String query) {


        if (value == null || value.isBlank()) {
            return;
        }


        if (value.toLowerCase()
                .contains(query.toLowerCase())) {

            suggestions.add(value);
        }
    }
}