package com.mediconnect.pro.controller;

import com.mediconnect.pro.dto.ApiResponse;
import com.mediconnect.pro.dto.UserProfileResponse;
import com.mediconnect.pro.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/profile")
    public ApiResponse<UserProfileResponse> getProfile(
            @RequestHeader("Authorization") String token){

        UserProfileResponse profile =
                userService.getProfile(token);

        return new ApiResponse<>(
                true,
                "Profile fetched successfully",
                profile
        );
    }
}