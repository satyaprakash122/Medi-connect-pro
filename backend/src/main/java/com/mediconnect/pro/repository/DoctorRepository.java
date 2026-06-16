package com.mediconnect.pro.repository;

import com.mediconnect.pro.entity.Doctor;
import com.mediconnect.pro.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    Optional<Doctor> findByUser(User user);

    List<Doctor> findBySpecialization(String specialization);
}
