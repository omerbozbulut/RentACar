package com.omerbozbulut.rentACar.Repository;

import com.omerbozbulut.rentACar.Entity.FuelType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FuelTypeDao extends JpaRepository<FuelType,Integer> {
    @Query(value = "SELECT * FROM fuelType WHERE fuelTypeName = ?1", nativeQuery = true)
    FuelType getByFuelTypeName(@Param("fuelTypeName") String fuelTypeName);
}
