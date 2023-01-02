package com.omerbozbulut.rentACar.Repository;

import com.omerbozbulut.rentACar.Entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CarDao extends JpaRepository<Car, Integer> {

    @Query(value = "SELECT * From car", nativeQuery = true)
    List<Car> getAllCars();

    @Query(value = "SELECT * From car ORDER BY price", nativeQuery = true)
    List<Car> getLowToHighCars();

    @Query(value = "SELECT * From car ORDER BY price DESC", nativeQuery = true)
    List<Car> getHighToLowCars();

    @Query(value = "Select * FROM car WHERE modelID IN (SELECT modelID FROM model WHERE model.modelName LIKE %?1%)", nativeQuery = true)
    List<Car> searchCar(@Param("name") String name);

}
