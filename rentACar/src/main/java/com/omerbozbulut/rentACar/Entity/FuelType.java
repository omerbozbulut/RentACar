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
@AllArgsConstructor
@NoArgsConstructor
@Table(name="fuelType")
public class FuelType {

    @Id
    @GeneratedValue
    private int fuelTypeID;

    @NotNull
    private String fuelTypeName;

}
