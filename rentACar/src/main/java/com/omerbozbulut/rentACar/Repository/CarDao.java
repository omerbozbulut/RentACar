package com.omerbozbulut.rentACar.Repository;

import com.omerbozbulut.rentACar.Entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CarDao extends JpaRepository<Car, Integer> {

    @Query(value = "SELECT * From car", nativeQuery = true)
    List<Car> getAllCar();

}
