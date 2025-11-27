package com.pdk.userservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import com.pdk.userservice.dto.Roles;
import com.pdk.userservice.dto.UserDTO;

import reactor.core.publisher.Mono;

@Service
public class ApiService {

    @Autowired
    private WebClient.Builder webClientBuilder;

    public Mono<Long> addProfile(UserDTO userDTO) {
        if (userDTO.getRole().equals(Roles.DOCTOR)) {
            return webClientBuilder.build()
                    .post()
                    .uri("http://localhost:9100/profile/doctor/add")
                    .bodyValue(userDTO)
                    .retrieve()
                    .bodyToMono(Long.class);
        } else if (userDTO.getRole().equals(Roles.PATIENT)) {
            return webClientBuilder.build()
                    .post()
                    .uri("http://localhost:9100/profile/patient/add")
                    .bodyValue(userDTO)
                    .retrieve()
                    .bodyToMono(Long.class);
        }
        return null;
    }
}
