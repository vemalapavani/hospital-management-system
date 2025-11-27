package com.pdk.userservice.entity;

import com.pdk.userservice.dto.Roles;
import com.pdk.userservice.dto.UserDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Column(unique = true, nullable = false)
    private String email;
    private String password;
    private Roles role;

    private Long profileId;

    public UserDTO toUserDTO() {
        return new UserDTO(this.id, this.name, this.email, this.password, this.role, this.profileId);
    }
}
