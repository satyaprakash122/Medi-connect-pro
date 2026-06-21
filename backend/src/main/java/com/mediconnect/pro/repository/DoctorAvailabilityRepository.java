package com.mediconnect.pro.repository;

import com.mediconnect.pro.entity.Doctor;
import com.mediconnect.pro.entity.DoctorAvailability;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorAvailabilityRepository extends JpaRepository<DoctorAvailability,Long> {

    List<DoctorAvailability> findByDoctor(Doctor doctor);

    List<DoctorAvailability> findByDoctorAndDayOfWeek(Doctor doctor, String dayOfWeek);
}
