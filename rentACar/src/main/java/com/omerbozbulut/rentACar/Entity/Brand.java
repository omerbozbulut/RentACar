package com.omerbozbulut.rentACar.Entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="brand")
public class Brand {

    @Id
    @GeneratedValue
    private int brandID;

    @NotNull
    private String brandName;

    @OneToOne
    @JoinColumn(name = "modelID")
    private Model model;

    @OneToMany(mappedBy = "brand")
    private List<Car> carList;
}
