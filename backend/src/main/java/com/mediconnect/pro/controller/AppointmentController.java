package com.mediconnect.pro.controller;

import com.mediconnect.pro.dto.AppointmentResponse;
import com.mediconnect.pro.dto.BookAppointmentRequest;
import com.mediconnect.pro.dto.DoctorAppointmentResponse;
import com.mediconnect.pro.entity.Appointment;
import com.mediconnect.pro.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@RequiredArgsConstructor
public class AppointmentController {
    private final AppointmentService appointmentService;

    @PostMapping//Book appointment controller
    public String bookAppointment(@RequestBody BookAppointmentRequest request,
                                  @RequestHeader("Authorization") String token){
        return appointmentService.bookAppointment(request,token);
    }

    //Get appointment status
    @GetMapping("/my")
    public List<AppointmentResponse> getMyAppointments(@RequestHeader("Authorization") String token){
        return appointmentService.getMyAppointments(token);
    }

    @GetMapping("/doctor")
    public List<DoctorAppointmentResponse> getDoctorAppointments(
            @RequestHeader("Authorization") String token) {

        return appointmentService.getDoctorAppointments(token);
    }

    //approve appointment
    @PutMapping("/{appointmentId}/approve")
    public String approveAppointment(
            @PathVariable Long appointmentId,
            @RequestHeader("Authorization") String token) {

        return appointmentService
                .approveAppointment(appointmentId, token);
    }

    //Reject appointment
    @PutMapping("/{appointmentId}/reject")
    public String rejectAppointment(
            @PathVariable Long appointmentId,
            @RequestHeader("Authorization") String token) {

        return appointmentService.rejectAppointment(appointmentId, token);
    }
}
