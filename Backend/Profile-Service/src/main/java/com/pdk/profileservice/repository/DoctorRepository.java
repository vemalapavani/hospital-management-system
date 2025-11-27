package com.pdk.profileservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.pdk.profileservice.entity.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    Optional<Doctor> findByEmail(String email);

    Optional<Doctor> findByLicenseNo(String licenseNo);
}
