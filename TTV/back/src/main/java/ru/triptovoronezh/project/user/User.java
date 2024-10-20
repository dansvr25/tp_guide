package ru.triptovoronezh.project.user;


import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
@Schema(name = "User", description = "Model for Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", unique = true)
    @NotEmpty
    @Size(max = 50, min = 1)
    private String name;

    @Column(name = "email", unique = true)
    @NotEmpty
    @Size(max = 50, min = 1)
    @Email
    private String email;

    @Column(name = "password")
    @NotEmpty
    private String password;
}
