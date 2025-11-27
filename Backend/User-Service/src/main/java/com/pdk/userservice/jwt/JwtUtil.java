package com.pdk.userservice.jwt;

import java.util.Date;
import java.util.HashMap;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil {

    private static final Long JWT_TOKEN_VALIDITY = 5 * 60 * 60L;
    private static final String SECRET_KEY = "sXB6NcsSRGoKhFqhOPIHJGFDSHLJKJHGjcodyfg8owdygfoenx9ueyhgfoiFDGH5rdyfghytrdfgI2lBsvV+RlzEgvb09XJb1gkhZU=";

    public String generateToken(UserDetails userDetails) {
        HashMap<String, Object> claims = new HashMap<>();
        CustomUserDetails user = (CustomUserDetails) userDetails;

        claims.put("id", user.getId());
        claims.put("email", user.getEmail());
        claims.put("role", user.getRole());
        claims.put("name", user.getName());
        claims.put("username", user.getUsername());
        claims.put("authorities", user.getAuthorities());
        // claims.put("password", user.getPassword());

        return doGenerateToken(claims, user.getUsername());
    }

    public String doGenerateToken(HashMap<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }
}
