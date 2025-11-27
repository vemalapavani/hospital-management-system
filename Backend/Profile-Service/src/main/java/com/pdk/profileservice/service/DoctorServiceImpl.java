package com.pdk.profileservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pdk.profileservice.dto.DoctorDto;
import com.pdk.profileservice.entity.Doctor;
import com.pdk.profileservice.exception.UserException;
import com.pdk.profileservice.repository.DoctorRepository;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public Long addDoctor(DoctorDto doctorDto) throws UserException {
        Optional<Doctor> existingDoctorByEmail = doctorRepository.findByEmail(doctorDto.getEmail());
        Optional<Doctor> existingDoctorByLicenseNo = doctorRepository.findByLicenseNo(doctorDto.getLicenseNo());
        if (doctorDto.getEmail() != null && existingDoctorByEmail.isPresent()) {
            throw new UserException("Doctor with email " + doctorDto.getEmail() + " already exists.");
        } else if (doctorDto.getLicenseNo() != null && existingDoctorByLicenseNo.isPresent()) {
            throw new UserException("Doctor with license number " + doctorDto.getLicenseNo() + " already exists.");
        }

        Doctor doctor = doctorDto.toEntity();
        doctorRepository.save(doctor);
        return doctor.getId();
    }

    @Override
    public DoctorDto getDoctorById(Long id) throws UserException {
        System.out.println("Fetching doctor with ID: " + id);
        return doctorRepository
                .findById(id)
                .orElseThrow(() -> new UserException("Doctor with Id " + id + " not found."))
                .toDto();
    }

    @Override
    public List<DoctorDto> getAllDoctors() throws UserException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllDoctors'");
    }

}
