package com.ALL_in_one.studyabroad.repository;


import com.ALL_in_one.studyabroad.entity.Institution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstitutionRepository extends JpaRepository<Institution , Long> {
}
