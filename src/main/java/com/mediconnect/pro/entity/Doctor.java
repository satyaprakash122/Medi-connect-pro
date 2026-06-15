package com.mediconnect.pro.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="doctors")
@Getter
@Setter
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String specialization;
    private String qualification;
    private Integer experience;
    private Double consultationFee;
    private String availability;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;
}
