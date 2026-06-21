package com.mediconnect.pro.service;

import com.mediconnect.pro.dto.AvailabilityRequest;
import com.mediconnect.pro.dto.AvailabilityResponse;
import com.mediconnect.pro.entity.Doctor;
import com.mediconnect.pro.entity.DoctorAvailability;
import com.mediconnect.pro.entity.User;
import com.mediconnect.pro.repository.DoctorAvailabilityRepository;
import com.mediconnect.pro.repository.DoctorRepository;
import com.mediconnect.pro.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DoctorAvailabilityService {

    private final DoctorAvailabilityRepository availabilityRepository;

    private final DoctorRepository doctorRepository;

    private final UserRepository userRepository;

    //add availability method
    public String addAvailability(AvailabilityRequest request, String email){
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new RuntimeException("User not found"));

        Doctor doctor = doctorRepository.findByUser(user)
                .orElseThrow(()-> new RuntimeException("Doctor profile not found"));

        if(request.getStartTime().isAfter(request.getEndTime())){
            throw new RuntimeException("Start time must be before end time");
        }
        List<DoctorAvailability> existingSlots = availabilityRepository.findByDoctorAndDayOfWeek(doctor, request.getDayOfWeek());

        for(DoctorAvailability slot : existingSlots){

            boolean overlaps = request.getStartTime().isBefore(slot.getEndTime()) && request.getEndTime().isAfter(slot.getStartTime());
            if(overlaps){
                throw new RuntimeException("Availability overlaps with an existing schedule");
            }
        }
        DoctorAvailability availability = new DoctorAvailability();
        availability.setDoctor(doctor);
        availability.setDayOfWeek(request.getDayOfWeek());
        availability.setStartTime(request.getStartTime());
        availability.setEndTime(request.getEndTime());

        availabilityRepository.save(availability);
        return "Availability added successfully";

    }

    //Get all availabilities method
    //public List<AvailabilityResponse> getMyAvailability(String email){
     //   User user = userRepository.findByEmail(email)
     //           .orElseThrow(()-> new RuntimeException("User not found"));
    //}
}
