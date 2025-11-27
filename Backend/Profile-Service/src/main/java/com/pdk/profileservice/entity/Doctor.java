package com.pdk.profileservice.entity;

import java.time.LocalDate;

import com.pdk.profileservice.dto.DoctorDto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    private LocalDate dateOfBirth;
    private String phone;
    private String address;

    @Column(unique = true)
    private String licenseNo;

    private String specialization;
    private String department;
    private Integer toatlExperience;

    public DoctorDto toDto() {
        return new DoctorDto(
                this.id,
                this.name,
                this.email,
                this.dateOfBirth,
                this.phone,
                this.address,
                this.licenseNo,
                this.specialization,
                this.department,
                this.toatlExperience);
    }
}