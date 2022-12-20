package com.omerbozbulut.rentACar.Entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="vehicleClass")
public class VehicleClass {

    @Id
    @GeneratedValue
    private int vehicleClassID;

    @NotNull
    private String nameOfVehicleClass;
}
