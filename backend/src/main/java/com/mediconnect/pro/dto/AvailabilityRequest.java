package com.mediconnect.pro.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
public class AvailabilityRequest {

    private String dayOfWeek;
    private LocalTime startTime;
    private LocalTime endTime;
}
