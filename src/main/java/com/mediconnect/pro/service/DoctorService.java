package com.mediconnect.pro.service;

import com.mediconnect.pro.dto.CreateDoctorRequest;
import com.mediconnect.pro.entity.Doctor;
import com.mediconnect.pro.entity.User;
import com.mediconnect.pro.enums.Role;
import com.mediconnect.pro.repository.DoctorRepository;
import com.mediconnect.pro.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DoctorService {

    private final DoctorRepository doctorRepository;

    private final UserRepository userRepository;

    //create doctor.
    public String createDoctor(CreateDoctorRequest request){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new RuntimeException("User not found"));
        //Allow only Doctor role
        if(user.getRole() != Role.DOCTOR){
            throw new RuntimeException("Only doctors can create doctor profiles");
        }
        //prevent duplicate profiles
        if(doctorRepository.findByUser(user).isPresent()){
            throw new RuntimeException("Doctor profile already exists");
        }
        Doctor doctor = new Doctor();
        doctor.setSpecialization(request.getSpecialization());
        doctor.setQualification(request.getQualification());
        doctor.setExperience(request.getExperience());
        doctor.setConsultationFee(request.getConsultationFee());
        doctor.setAvailability(request.getAvailability());
        doctor.setUser(user);
        doctorRepository.save(doctor);
        return "Doctor profile created successfully";
    }

    public List<Doctor> getAllDoctors(){
        return doctorRepository.findAll();
    }

    public Doctor getDoctorById(Long id){
        return doctorRepository.findById(id)
                .orElseThrow(()->new RuntimeException("Doctor not found"));
    }

    public List<Doctor> getDoctorBySpecialization(String specialization){
        return doctorRepository.findBySpecialization(specialization);
    }
}
