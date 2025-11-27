package com.pdk.userservice.service;

import com.pdk.userservice.dto.UserDTO;
import com.pdk.userservice.exception.UserException;

public interface UserService {

    public void registerUser(UserDTO userDTO) throws UserException;

    public UserDTO loginUser(UserDTO userDTO) throws UserException;

    public UserDTO getUserById(Long id) throws UserException;

    public void updateUser(Long id, UserDTO userDTO);

    public UserDTO getUserByEmail(String email) throws UserException;
}
