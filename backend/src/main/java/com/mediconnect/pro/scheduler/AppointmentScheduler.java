package com.mediconnect.pro.scheduler;

import com.mediconnect.pro.entity.Appointment;
import com.mediconnect.pro.enums.AppointmentStatus;
import com.mediconnect.pro.repository.AppointmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Component
@RequiredArgsConstructor
public class AppointmentScheduler {

    private final AppointmentRepository appointmentRepository;

    @Scheduled(fixedRate = 3600000) // every 1 hour
    public void expirePendingAppointments() {

        LocalDateTime threshold =
                LocalDateTime.now().minusHours(24);

        List<Appointment> expiredAppointments =
                appointmentRepository
                        .findByStatusAndCreatedAtBefore(
                                AppointmentStatus.PENDING,
                                threshold
                        );

        expiredAppointments.forEach(
                appointment ->
                        appointment.setStatus(AppointmentStatus.EXPIRED)
        );

        appointmentRepository.saveAll(expiredAppointments);

        System.out.println(
                "Expired appointments count: "
                        + expiredAppointments.size()
        );
    }
}