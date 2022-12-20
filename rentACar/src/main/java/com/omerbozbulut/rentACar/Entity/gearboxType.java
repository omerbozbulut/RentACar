package com.omerbozbulut.rentACar.Entity;


import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="gearboxType")
public class gearboxType {

    @Id
    @GeneratedValue
    private int gearboxTypeID;

    @NotNull
    private String nameOfGearboxType;

    @OneToMany(mappedBy = "gearboxType")
    private List<Car> carList;
}
