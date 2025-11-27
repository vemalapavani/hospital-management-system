package com.pdk.userservice.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pdk.userservice.dto.LoginDto;
import com.pdk.userservice.dto.ResponceDto;
import com.pdk.userservice.dto.UserDTO;
import com.pdk.userservice.exception.UserException;
import com.pdk.userservice.jwt.JwtUtil;
import com.pdk.userservice.service.UserService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/users")
@Validated
@CrossOrigin
public class UserApi {

    @Autowired
    private UserService userService;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<ResponceDto> registerUser(@RequestBody @Valid UserDTO userDTO) throws UserException {
        userService.registerUser(userDTO);
        return new ResponseEntity<>(new ResponceDto("Register user Successfully."), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody @Valid LoginDto loginDto) throws UserException {
        // UserDTO loggedInUser = userService.loginUser(loginDto);
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword()));
        } catch (AuthenticationException e) {
            throw new UserException("Invalid credentials");
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(loginDto.getEmail());
        String jwtToken = jwtUtil.generateToken(userDetails);
        return new ResponseEntity<>(jwtToken, HttpStatus.OK);
    }

    @GetMapping("/test")
    public String getMethodName() {
        return new String("Test");
    }

}
