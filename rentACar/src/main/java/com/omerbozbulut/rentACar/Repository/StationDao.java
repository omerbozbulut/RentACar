package com.omerbozbulut.rentACar.Repository;

import com.omerbozbulut.rentACar.Entity.Station;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StationDao extends JpaRepository<Station,Integer> {
    @Query(name = "SELECT * FROM station WHERE stationName = ?1", nativeQuery = true)
    Station getByStationName(@Param("stationName") String stationName);
}
