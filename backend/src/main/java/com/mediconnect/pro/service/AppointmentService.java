package com.mediconnect.pro.service;

import com.mediconnect.pro.dto.AppointmentResponse;
import com.mediconnect.pro.dto.BookAppointmentRequest;
import com.mediconnect.pro.dto.DoctorAppointmentResponse;
import com.mediconnect.pro.entity.Appointment;
import com.mediconnect.pro.entity.Doctor;
import com.mediconnect.pro.entity.User;
import com.mediconnect.pro.enums.AppointmentStatus;
import com.mediconnect.pro.repository.AppointmentRepository;
import com.mediconnect.pro.repository.DoctorRepository;
import com.mediconnect.pro.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

    private final DoctorRepository doctorRepository;

    private final UserRepository userRepository;

    private final JwtService jwtService;


    //Patient can book appointment.
    public String bookAppointment(BookAppointmentRequest request, String token){

        //Remove bearer
        token = token.substring(7);

        //Extract email from JWT
        String email = jwtService.extractEmail(token);

        //Find logged-in patient
        User patient = userRepository.findByEmail(email)
                .orElseThrow(()-> new RuntimeException("Patient not found"));

        //Find doctor
        Doctor doctor = doctorRepository.findById(request.getDoctorId())
                .orElseThrow(()-> new RuntimeException("Doctor not found"));

        boolean slotExists =
                appointmentRepository
                        .existsByDoctorAndAppointmentDateAndAppointmentTime(
                                doctor,
                                request.getAppointmentDate(),
                                request.getAppointmentTime()
                        );
        if (slotExists) {
            throw new RuntimeException(
                    "This slot is already booked");
        }
        //Create appointment
        Appointment appointment = new Appointment();

        appointment.setPatient(patient);
        appointment.setDoctor(doctor);
        appointment.setAppointmentDate(request.getAppointmentDate());
        appointment.setAppointmentTime(request.getAppointmentTime());
        appointment.setReason(request.getReason());

        //Save appointment
        appointmentRepository.save(appointment);

        return "Appointment booked successfully";
    }

    //Patient can view their appointment status.
    public List<AppointmentResponse> getMyAppointments(String token){
        token = token.substring(7);

        String email = jwtService.extractEmail(token);

        User patient = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Patient not found"));

        List<Appointment> appointments = appointmentRepository.findByPatient(patient);
        return appointments
                .stream().map(appointment -> AppointmentResponse.builder()
                        .appointmentId(appointment.getId())
                        .doctorName(appointment.getDoctor().getUser().getName())
                        .specialization(appointment.getDoctor().getSpecialization())
                        .appointmentDate(appointment.getAppointmentDate())
                        .appointmentTime(appointment.getAppointmentTime())
                        .reason(appointment.getReason())
                        .status(appointment.getStatus())
                        .build()).toList();
    }

    //Get doctor appointments
    public List<DoctorAppointmentResponse> getDoctorAppointments(String token){
        token = token.substring(7);

        String email = jwtService.extractEmail(token);

        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new RuntimeException("User not found"));

        Doctor doctor = doctorRepository.findByUser(user)
                .orElseThrow(()-> new RuntimeException("Doctor profile not found"));

        //Fetch appointments
        List<Appointment> appointments = appointmentRepository.findByDoctor(doctor);

        //convert to DTO
        return appointments.stream().map( appointment -> DoctorAppointmentResponse.builder()
                .appointmentId(appointment.getId())
                .patientName(appointment.getPatient().getName())
                .appointmentDate(appointment.getAppointmentDate())
                .appointmentTime(appointment.getAppointmentTime())
                .reason(appointment.getReason())
                .status(appointment.getStatus())
                .build()).toList();
    }



    //Doctors approve appointments
    public String approveAppointment(Long appointmentId, String token) {

        token = token.substring(7);
        String email = jwtService.extractEmail(token);
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new RuntimeException("User not found"));
        Doctor loggedInDoctor = doctorRepository.findByUser(user)
                .orElseThrow(()-> new RuntimeException("Doctor profile not found"));

        Appointment appointment =
                appointmentRepository.findById(appointmentId)
                        .orElseThrow(() ->
                                new RuntimeException("Appointment not found"));

        if (!appointment.getDoctor().getId()
                .equals(loggedInDoctor.getId())) {

            throw new RuntimeException(
                    "You cannot approve another doctor's appointment");
        }

        appointment.setStatus(AppointmentStatus.APPROVED);

        appointmentRepository.save(appointment);

        return "Appointment approved successfully";
    }

    //Doctor reject the appointment
    public String rejectAppointment(Long appointmentId,String token) {
        token = token.substring(7);
        String email = jwtService.extractEmail(token);
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new RuntimeException("User not found"));
        Doctor loggedInDoctor = doctorRepository.findByUser(user)
                .orElseThrow(()-> new RuntimeException("Doctor profile not found"));


        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() ->
                        new RuntimeException("Appointment not found"));

        if (!appointment.getDoctor().getId()
                .equals(loggedInDoctor.getId())) {

            throw new RuntimeException(
                    "You cannot approve another doctor's appointment");
        }

        appointment.setStatus(AppointmentStatus.REJECTED);

        appointmentRepository.save(appointment);

        return "Appointment rejected successfully";
    }

    //Cancel your appointment service
    public String cancelAppointment(Long appointmentId, String email) {

        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        // Ensure patient owns the appointment
        if (!appointment.getPatient().getEmail().equals(email)) {
            throw new RuntimeException("You can only cancel your own appointments");
        }

        // Prevent cancelling rejected/cancelled appointments
        if (appointment.getStatus() == AppointmentStatus.REJECTED ||
                appointment.getStatus() == AppointmentStatus.CANCELLED) {

            throw new RuntimeException(
                    "This appointment cannot be cancelled"
            );
        }

        appointment.setStatus(AppointmentStatus.CANCELLED);

        appointmentRepository.save(appointment);

        return "Appointment cancelled successfully";
    }
}
