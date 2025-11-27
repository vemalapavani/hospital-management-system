package com.pdk.profileservice.service;

import com.pdk.profileservice.dto.PatientDto;
import com.pdk.profileservice.exception.UserException;

public interface PatientService {
    public Long addPatient(PatientDto patientDto) throws UserException;

    public PatientDto getPatientById(Long id) throws UserException;

    public PatientDto updatePatient(PatientDto patientDto) throws UserException;

}