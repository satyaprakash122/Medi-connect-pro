package com.mediconnect.pro.controller;

import com.mediconnect.pro.dto.ApiResponse;
import com.mediconnect.pro.dto.AppointmentResponse;
import com.mediconnect.pro.dto.BookAppointmentRequest;
import com.mediconnect.pro.dto.DoctorAppointmentResponse;
import com.mediconnect.pro.entity.Appointment;
import com.mediconnect.pro.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@RequiredArgsConstructor
public class AppointmentController {
    private final AppointmentService appointmentService;

    @PostMapping//Book appointment controller
    public ApiResponse<String> bookAppointment(@RequestBody BookAppointmentRequest request,
                                       @RequestHeader("Authorization") String token){
        String result = appointmentService.bookAppointment(request,token);
        return new ApiResponse<>(
                true,
                "Appointment booked successfully",
                result
        );
    }

    //Get appointment status
    @GetMapping("/my")
    public ApiResponse<List<AppointmentResponse>> getMyAppointments(
            @RequestHeader("Authorization") String token) {

        List<AppointmentResponse> appointments =
                appointmentService.getMyAppointments(token);

        return new ApiResponse<>(
                true,
                "Appointments fetched successfully",
                appointments
        );
    }

    @GetMapping("/doctor")
    public ApiResponse<List<DoctorAppointmentResponse>> getDoctorAppointments(
            @RequestHeader("Authorization") String token) {

        List<DoctorAppointmentResponse> appointments =
                appointmentService.getDoctorAppointments(token);

        return new ApiResponse<>(
                true,
                "Doctor appointments fetched successfully",
                appointments
        );
    }

    //approve appointment
    @PutMapping("/{appointmentId}/approve")
    public ApiResponse<String> approveAppointment(
            @PathVariable Long appointmentId,
            @RequestHeader("Authorization") String token) {

        String result = appointmentService
                .approveAppointment(appointmentId, token);
        return new ApiResponse<>(
                true,
                "Approved successfully",
                result
        );
    }

    //Reject appointment
    @PutMapping("/{appointmentId}/reject")
    public ApiResponse<String> rejectAppointment(
            @PathVariable Long appointmentId,
            @RequestHeader("Authorization") String token) {

        String result = appointmentService.rejectAppointment(appointmentId, token);
        return new ApiResponse<>(
                true,
                "Rejected appointment",
                result
        );
    }

    //Cancel appointment
    @PutMapping("/{appointmentId}/cancel")
    public ApiResponse<String> cancelAppointment(
            @PathVariable Long appointmentId,
            Authentication authentication) {

        String email = authentication.getName();

        String response = appointmentService
                .cancelAppointment(appointmentId, email);

        return new ApiResponse<>(
                true,
                response,
                null
        );
    }
}
