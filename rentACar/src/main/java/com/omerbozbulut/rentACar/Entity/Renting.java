package com.omerbozbulut.rentACar.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="renting")
public class Renting {

    @Id
    @GeneratedValue
    private int rentingID;

    @OneToOne
    @JoinColumn(name = "carID")
    private Car car;

    @ManyToOne
    @JoinColumn(name = "customerID")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "stationID")
    private Station station;

    //private Date purchaseDate;

    //private Date dropOffDate;
}
