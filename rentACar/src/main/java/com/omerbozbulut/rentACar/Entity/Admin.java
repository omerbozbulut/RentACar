package com.omerbozbulut.rentACar.Entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="admin")
public class Admin {
    @Id
    @GeneratedValue
    private int id;

    @NotNull
    private String name;

    @NotNull
    @Column(name = "passwordd")
    private String password;
}
