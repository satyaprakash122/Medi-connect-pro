package com.mediconnect.pro.dto;

import com.mediconnect.pro.enums.AppointmentStatus;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Builder
public class DoctorAppointmentResponse {
    private Long appointmentId;

    private String patientName;

    private LocalDate appointmentDate;

    private LocalTime appointmentTime;

    private String reason;

    private AppointmentStatus status;
}
