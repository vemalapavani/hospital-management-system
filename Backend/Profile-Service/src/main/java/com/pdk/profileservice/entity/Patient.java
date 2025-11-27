package com.pdk.profileservice.entity;

import com.pdk.profileservice.dto.BloodGroup;
import com.pdk.profileservice.dto.PatientDto;

import java.time.LocalDate;

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
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    private LocalDate dateOfBirth;
    private String phone;
    private String address;

    // @Column(unique = true, nullable = false)
    private String aadharNumber;
    private BloodGroup bloodGroup;

    private String allergies;
    private String chronicDisease;

    public PatientDto toDto() {
        return new PatientDto(
                this.id,
                this.name,
                this.email,
                this.dateOfBirth,
                this.phone,
                this.address,
                this.aadharNumber,
                this.bloodGroup,
                this.allergies,
                this.chronicDisease);
    }
}