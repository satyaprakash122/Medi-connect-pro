package com.mediconnect.pro.repository;

import com.mediconnect.pro.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


// Jpa repository provides save(), findById(), findAll(), delete() etc.
public interface UserRepository extends JpaRepository<User, Long> {

    //Used during registration and Login.
    Optional<User> findByEmail(String email);
}
