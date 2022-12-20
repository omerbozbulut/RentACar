package com.omerbozbulut.rentACar.Entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="customer")
public class Customer {

    @Id
    @GeneratedValue
    private int customerID;

    @NotNull
    @Column(length = 11)
    private long identityNumber;

    @NotNull
    private String name;

    @NotNull
    private String surname;

    //private Date dateOfBirth;

    @NotNull
    private String email;

    @NotNull
    private String password;

    //private Date dateOfRegistration;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "drivingLicenseID")
    private DrivingLicense drivingLicense;
}
