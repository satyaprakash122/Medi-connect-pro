package com.mediconnect.pro.repository;

import com.mediconnect.pro.dto.AppointmentResponse;
import com.mediconnect.pro.entity.Appointment;
import com.mediconnect.pro.entity.Doctor;
import com.mediconnect.pro.entity.User;
import com.mediconnect.pro.enums.AppointmentStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByDoctorId(Long doctorId);

    List<Appointment> findByPatientId(Long patientId);

    List<Appointment> findByStatus(AppointmentStatus status);

    List<Appointment> findByPatient(User patient);

    List<Appointment> findByDoctor(Doctor doctor);

    boolean existsByDoctorAndAppointmentDateAndAppointmentTime(
            Doctor doctor,
            LocalDate appointmentDate,
            LocalTime appointmentTime
    );
}
