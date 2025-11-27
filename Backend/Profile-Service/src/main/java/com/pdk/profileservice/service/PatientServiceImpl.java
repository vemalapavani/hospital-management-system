package com.pdk.profileservice.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pdk.profileservice.dto.PatientDto;
import com.pdk.profileservice.entity.Patient;
import com.pdk.profileservice.exception.UserException;
import com.pdk.profileservice.repository.PatientRepository;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public Long addPatient(PatientDto patientDto) throws UserException {
        Optional<Patient> existingByEmail = patientRepository.findByEmail(patientDto.getEmail());
        Optional<Patient> existingByAadhar = patientRepository.findByAadharNumber(patientDto.getAadharNumber());

        if (patientDto.getEmail() != null && existingByEmail.isPresent()) {
            throw new UserException("Patient with email " + patientDto.getEmail() + " already exists.");
        }
        if (patientDto.getAadharNumber() != null && existingByAadhar.isPresent()) {
            throw new UserException("Patient with Aadhar number " + patientDto.getAadharNumber() + " already exists.");
        }

        Patient patient = patientDto.toEntity();
        patientRepository.save(patient);
        return patient.getId();
    }

    @Override
    public PatientDto getPatientById(Long id) throws UserException {
        return patientRepository
                .findById(id)
                .orElseThrow(() -> new UserException("Patient with ID " + id + " not found."))
                .toDto();
    }

    @Override
    public PatientDto updatePatient(PatientDto patientDto) throws UserException {
        if (patientRepository.findById(patientDto.getId()).isPresent()) {
            throw new UserException("Patient with ID " + patientDto.getId() + " already exists.");
        }

        throw new UnsupportedOperationException("Unimplemented method 'updatePatient'");
    }

}
