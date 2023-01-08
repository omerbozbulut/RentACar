package com.omerbozbulut.rentACar.Repository;

import com.omerbozbulut.rentACar.Entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

public interface CarDao extends JpaRepository<Car, Integer> {

    @Query(value = "SELECT * From car", nativeQuery = true)
    List<Car> getAllCars();

    @Query(value = "SELECT * From car ORDER BY price", nativeQuery = true)
    List<Car> getLowToHighCars();

    @Query(value = "SELECT * From car ORDER BY price DESC", nativeQuery = true)
    List<Car> getHighToLowCars();

    @Query(value = "SELECT * FROM car WHERE vehicleClassID = ?1", nativeQuery = true)
    List<Car> getCarsByVehicleClass(@Param("vehicleClassID") int vehicleClassID);

    @Query(value = "{CALL carSearch(:kriter)}", nativeQuery = true)
    List<Car> searchCar(@Param("kriter") String kriter);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO car VALUES(?1, ?2, ?4, ?5, ?8, ?6, ?9, ?7, ?3)", nativeQuery = true)
    int saveCar(@Param("numberPlate") String numberPlate, @Param("vehicleClassID") int vehicleClassID, @Param("modelID") int modelID, @Param("gearboxTypeID") int gearboxTypeID, @Param("fuelTypeID") int fuelTypeID , @Param("colorID") int colorID, @Param("price") Float price, @Param("stationID") int stationID, @Param("productionDate") Date productionDate);
}
