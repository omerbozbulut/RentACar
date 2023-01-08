package com.omerbozbulut.rentACar.Repository;

import com.omerbozbulut.rentACar.Entity.Station;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StationDao extends JpaRepository<Station,Integer> {
    @Query(value = "SELECT * FROM station WHERE stationName = ?1", nativeQuery = true)
    Station getByStationName(@Param("stationName") String stationName);

    @Query(value = "Select * From station", nativeQuery = true)
    List<Station> getAllStation();
}
