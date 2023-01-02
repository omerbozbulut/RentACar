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
@Table(name="brand")
public class Brand {

    @Id
    @GeneratedValue
    private int brandID;

    @NotNull
    @Column(length = 30)
    private String brandName;
}
