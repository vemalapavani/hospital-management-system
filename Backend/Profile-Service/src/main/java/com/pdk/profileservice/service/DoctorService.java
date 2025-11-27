package com.pdk.profileservice.service;

import java.util.List;

import com.pdk.profileservice.dto.DoctorDto;
import com.pdk.profileservice.exception.UserException;

public interface DoctorService {
    public Long addDoctor(DoctorDto doctorDto) throws UserException;

    public DoctorDto getDoctorById(Long id) throws UserException;

    public List<DoctorDto> getAllDoctors() throws UserException;
}
