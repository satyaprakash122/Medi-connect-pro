package com.mediconnect.pro.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
@Builder
public class AvailabilityResponse {

    private Long id;

    private String dayOfWeek;

    private LocalTime startTime;

    private LocalTime endTime;
}
