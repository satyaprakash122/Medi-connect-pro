package com.mediconnect.pro.controller;

import com.mediconnect.pro.dto.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @GetMapping("/api/users/profile")
    public ApiResponse<String> profile(){

        return new ApiResponse<>(
                true,
                "Profile fetched successfully",
                "Welcome to MediConnect"
        );
    }
}
