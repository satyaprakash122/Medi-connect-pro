package com.mediconnect.pro.dto;

import com.mediconnect.pro.enums.AppointmentStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Builder
public class AppointmentResponse {
    private Long appointmentId;
    private String doctorName;
    private String specialization;
    private LocalDate appointmentDate;
    private LocalTime appointmentTime;
    private String reason;
    private AppointmentStatus status;
}
