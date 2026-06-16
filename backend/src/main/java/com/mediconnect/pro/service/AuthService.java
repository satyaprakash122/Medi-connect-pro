package com.mediconnect.pro.service;

import com.mediconnect.pro.dto.LoginRequest;
import com.mediconnect.pro.dto.LoginResponse;
import com.mediconnect.pro.dto.RegisterRequest;
import com.mediconnect.pro.entity.User;
import com.mediconnect.pro.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    //Inject UserRepository here
    private final UserRepository userRepository;

    //Inject password encoder here
    private final PasswordEncoder passwordEncoder;

    //Inject JwtService
    private final JwtService jwtService;

    //register method
    public String register(RegisterRequest request){

        //check if email already exists
        if(userRepository.findByEmail(request.getEmail()).isPresent()){
            throw new RuntimeException("User already exists");
        }
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole());
        userRepository.save(user);
        return "User Registered successfully";
    }

    //Login method
    public LoginResponse login(LoginRequest request){
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(()-> new RuntimeException("User not found"));

        boolean matches = passwordEncoder.matches(request.getPassword(),user.getPassword());
        if(!matches){
            throw new RuntimeException("Invalid credential");
        }
        return new LoginResponse(
                jwtService.generateToken(user.getEmail())
        );
    }
}
