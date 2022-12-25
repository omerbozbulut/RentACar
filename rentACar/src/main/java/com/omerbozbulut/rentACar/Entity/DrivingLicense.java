package com.omerbozbulut.rentACar.Entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="drivingLicense")
public class DrivingLicense {

    @Id
    @GeneratedValue
    private int drivingLicenseID;

    @NotNull
    private String drivingLicenseName;

}
