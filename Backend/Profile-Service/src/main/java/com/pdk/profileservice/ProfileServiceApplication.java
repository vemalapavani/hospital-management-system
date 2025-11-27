package com.pdk.profileservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProfileServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProfileServiceApplication.class, args);
		System.out.println("-------------------------------------");
		System.out.println("	 Profile Service HMS");
		System.out.println("-------------------------------------");
	}
}
