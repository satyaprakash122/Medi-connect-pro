package com.mediconnect.pro.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateDoctorRequest {
    private String specialization;
    private String qualification;
    private Integer experience;
    private Double consultationFee;
    private String availability;
}
