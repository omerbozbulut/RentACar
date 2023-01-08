package com.omerbozbulut.rentACar.Repository;

import com.omerbozbulut.rentACar.Entity.gearboxType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface GearboxTypeDao extends JpaRepository<gearboxType, Integer> {
    @Query(value = "SELECT * FROM gearboxType WHERE gearboxTypeName = ?1", nativeQuery = true)
    gearboxType getByGearboxTypeName(@Param("gearboxTypeName") String gearboxTypeName);
}
