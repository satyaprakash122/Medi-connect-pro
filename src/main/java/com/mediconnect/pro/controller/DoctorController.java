package com.mediconnect.pro.controller;

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
    public String createDoctor(@RequestBody CreateDoctorRequest request){
        return doctorService.createDoctor(request);
    }

    @GetMapping
    public List<Doctor> getAllDoctors(){
        return doctorService.getAllDoctors();
    }

    @GetMapping("/{id}")
    public Doctor getDoctorById(@PathVariable Long id){
        return doctorService.getDoctorById(id);
    }

    @GetMapping("/specialization/{specialization}")
    public List<Doctor> getDoctorsBySpecialization(@PathVariable String specialization){
        return doctorService.getDoctorBySpecialization(specialization);
    }
}
