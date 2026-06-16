package com.mediconnect.pro.dto;

import com.mediconnect.pro.enums.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {

    private String name;

    private String email;

    private String password;

    private Role role;
}
