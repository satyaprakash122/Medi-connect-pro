package com.mediconnect.pro.controller;

import com.mediconnect.pro.dto.ApiResponse;
import com.mediconnect.pro.dto.CreateDoctorRequest;
import com.mediconnect.pro.entity.Doctor;
import com.mediconnect.pro.service.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.util.List;

@RestController
@RequestMapping("/api/doctors")
@RequiredArgsConstructor
public class DoctorController {
    private final DoctorService doctorService;

    @PostMapping
    public ApiResponse<String> createDoctor(@RequestBody CreateDoctorRequest request){
        String result = doctorService.createDoctor(request);
        return new ApiResponse<>(
                true,
                "Doctor profile created successfully",
                result
        );
    }

    @GetMapping
    public ApiResponse<List<Doctor>> getAllDoctors(){
        List<Doctor> doctors = doctorService.getAllDoctors();
        return new ApiResponse<>(
                true,
                "All doctors list fetched successfully",
                doctors
        );
    }

    @GetMapping("/{id}")
    public ApiResponse<Doctor> getDoctorById(@PathVariable Long id){
        Doctor doctor = doctorService.getDoctorById(id);
        return new ApiResponse<>(
                true,
                "doctor fetched successfully",
                doctor
        );
    }

    @GetMapping("/specialization/{specialization}")
    public ApiResponse<List<Doctor>> getDoctorsBySpecialization(@PathVariable String specialization){
        List<Doctor> doctors = doctorService.getDoctorBySpecialization(specialization);
        return new ApiResponse<>(
                true,
                "All doctors by specialization fetched successfully",
                doctors
        );
    }
}
