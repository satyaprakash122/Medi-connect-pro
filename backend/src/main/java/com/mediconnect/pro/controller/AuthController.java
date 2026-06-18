package com.mediconnect.pro.controller;

import com.mediconnect.pro.dto.ApiResponse;
import com.mediconnect.pro.dto.LoginRequest;
import com.mediconnect.pro.dto.LoginResponse;
import com.mediconnect.pro.dto.RegisterRequest;
import com.mediconnect.pro.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/auth")
@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ApiResponse<String> register(@RequestBody RegisterRequest request){
        String result = authService.register(request);
        return new ApiResponse<>(
                true,
                "User registered successfully",
                result
        );
    }

    @PostMapping("/login")
    public ApiResponse<LoginResponse> login(
            @RequestBody LoginRequest request){

        LoginResponse response = authService.login(request);

        return new ApiResponse<>(
                true,
                "Login successful",
                response
        );
    }
}
