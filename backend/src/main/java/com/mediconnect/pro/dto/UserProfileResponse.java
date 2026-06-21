package com.mediconnect.pro.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserProfileResponse {
    private String name;
    private String email;
    private String role;
}
