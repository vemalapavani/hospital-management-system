package com.pdk.profileservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pdk.profileservice.entity.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    Optional<Patient> findByEmail(String email);

    Optional<Patient> findByAadharNumber(String aadharNumber);
}
