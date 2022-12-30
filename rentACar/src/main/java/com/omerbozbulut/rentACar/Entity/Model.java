package com.omerbozbulut.rentACar.Entity;


import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="model")
public class Model {

    @Id
    @GeneratedValue
    private int modelID;

    @NotNull
    private String modelName;

    @ManyToOne
    @JoinColumn(name = "brandID")
    private Brand brand;
}
