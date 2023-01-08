package com.omerbozbulut.rentACar.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="car")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int carID;

    @NotNull
    private String numberPlate;

    @NotNull
    private float price;

    @OneToOne
    @JoinColumn(name = "vehicleClassID")
    private VehicleClass vehicleClass;

    @ManyToOne
    @JoinColumn(name = "modelID")
    private Model model;

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

    @Type(type="date")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date productionDate;
}
