package com.mediconnect.pro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class MediconnectProApplication {

	public static void main(String[] args) {
		SpringApplication.run(MediconnectProApplication.class, args);
	}

}
