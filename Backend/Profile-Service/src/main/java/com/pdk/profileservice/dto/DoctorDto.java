package com.pdk.profileservice.dto;

import java.time.LocalDate;

import com.pdk.profileservice.entity.Doctor;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DoctorDto {
    private Long id;
    private String name;
    private String email;
    private LocalDate dateOfBirth;
    private String phone;
    private String address;
    private String licenseNo;
    private String specialization;
    private String department;
    private Integer toatlExperience;

    public Doctor toEntity() {
        Doctor doctor = new Doctor();
        doctor.setId(this.id);
        doctor.setName(this.name);
        doctor.setEmail(this.email);
        doctor.setDateOfBirth(this.dateOfBirth);
        doctor.setPhone(this.phone);
        doctor.setAddress(this.address);
        doctor.setLicenseNo(this.licenseNo);
        doctor.setSpecialization(this.specialization);
        doctor.setDepartment(this.department);
        doctor.setToatlExperience(this.toatlExperience);
        return doctor;
    }
}
