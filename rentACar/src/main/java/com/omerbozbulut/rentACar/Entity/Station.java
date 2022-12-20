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
@Table(name="station")
public class Station {

    @Id
    @GeneratedValue
    private int stationID;

    private String stationName;

    @ManyToOne
    @JoinColumn(name="provinceID")
    private Province province;

    @NotNull
    private String address;
}
