package com.omerbozbulut.rentACar.Repository;

import com.omerbozbulut.rentACar.Entity.VehicleClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VehicleClassDao extends JpaRepository<VehicleClass, Integer> {
    @Query(value = "SELECT * FROM vehicleClass WHERE nameOfVehicleClass = ?1", nativeQuery = true)
    VehicleClass getByNameOfVehicleClass(@Param("nameOfVehicleClass") String nameOfVehicleClass);

    @Query(value = "Select * From vehicleClass", nativeQuery = true)
    List<VehicleClass> getAllVehicleClass();
}
