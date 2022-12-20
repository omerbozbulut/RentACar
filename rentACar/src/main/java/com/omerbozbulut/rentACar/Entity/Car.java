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
@Table(name="car")
public class Car {
    @Id
    @GeneratedValue
    private int carID;

    @NotNull
    private char numberPlate;

    @OneToOne
    @JoinColumn(name = "vehicleClassID")
    private VehicleClass vehicleClass;

    @ManyToOne
    @JoinColumn(name = "brandID")
    private Brand brand;

    @ManyToOne
    @JoinColumn(name = "gearboxTypeID")
    private gearboxType gearboxType;

    @ManyToOne
    @JoinColumn(name = "fuelTypeID")
    private FuelType fuelType;

    @ManyToOne
    @JoinColumn(name = "stationID")
    private Station station;

    @ManyToOne
    @JoinColumn(name = "colorID")
    private Color color;

    //private Date vehicleAge;
}
