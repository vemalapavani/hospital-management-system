package com.pdk.userservice.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.pdk.userservice.dto.UserDTO;
import com.pdk.userservice.exception.UserException;
import com.pdk.userservice.service.UserService;

@Service
public class MYUserDetailsService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        try {
            UserDTO userDto = userService.getUserByEmail(email);

            return new CustomUserDetails(
                    userDto.getId(),
                    userDto.getEmail(),
                    userDto.getEmail(),
                    userDto.getPassword(),
                    userDto.getRole(),
                    userDto.getName(),
                    null);
        } catch (UserException e) {
            // throw new UsernameNotFoundException("User not found with email: " + email,
            // e);
            e.printStackTrace();
        }
        return null;
    }
}
