package com.mediconnect.pro.controller;

import com.mediconnect.pro.dto.ApiResponse;
import com.mediconnect.pro.dto.AvailabilityRequest;
import com.mediconnect.pro.service.DoctorAvailabilityService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/doctor/availability")
@RequiredArgsConstructor
public class DoctorAvailabilityController {
    private final DoctorAvailabilityService doctorAvailabilityService;

    @PostMapping
    public ApiResponse<String> addAvailability(@RequestBody AvailabilityRequest request, Authentication authentication){
        String email = authentication.getName();
        String response = doctorAvailabilityService.addAvailability(request,email);

        return new ApiResponse<>(
                true,
                response,
                null
        );
    }
}
