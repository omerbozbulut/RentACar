package com.omerbozbulut.rentACar.Entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Date;

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

    @Type(type="date")
    private Date purchaseDate;

    @Type(type="date")
    private Date dropOffDate;

    @NotNull
    private float totalPrice;
}
