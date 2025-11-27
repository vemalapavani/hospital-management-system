package com.pdk.profileservice.dto;

import java.time.LocalDate;

import com.pdk.profileservice.entity.Patient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatientDto {
    private Long id;
    private String name;
    private String email;
    private LocalDate dateOfBirth;
    private String phone;
    private String address;
    private String aadharNumber;
    private BloodGroup bloodGroup;
    private String allergies;
    private String chronicDisease;

    public Patient toEntity() {
        Patient patient = new Patient();
        patient.setId(this.id);
        patient.setName(this.name);
        patient.setEmail(this.email);
        patient.setDateOfBirth(this.dateOfBirth);
        patient.setPhone(this.phone);
        patient.setAddress(this.address);
        patient.setAadharNumber(this.aadharNumber);
        patient.setBloodGroup(this.bloodGroup);
        patient.setAllergies(this.allergies);
        patient.setChronicDisease(this.chronicDisease);
        return patient;
    }
}
