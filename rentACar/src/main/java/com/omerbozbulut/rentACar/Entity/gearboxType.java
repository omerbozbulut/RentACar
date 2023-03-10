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
@Table(name="gearboxType")
public class gearboxType {

    @Id
    @GeneratedValue
    private int gearboxTypeID;

    @NotNull
    private String gearboxTypeName;
}
