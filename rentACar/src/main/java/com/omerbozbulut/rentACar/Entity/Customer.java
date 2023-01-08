package com.omerbozbulut.rentACar.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Date;

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
    private String customerName;

    @NotNull
    private String surname;

    @Type(type="date")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dateOfBirth;

    @NotNull
    private String email;

    @NotNull
    private String password;

    @Type(type="date")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dateOfRegistration;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "drivingLicenseID")
    private DrivingLicense drivingLicense;
}
