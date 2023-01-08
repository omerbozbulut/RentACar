package com.omerbozbulut.rentACar.Repository;

import com.omerbozbulut.rentACar.Entity.Color;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ColorDao extends JpaRepository<Color,Integer> {
    @Query(value = "SELECT * FROM color WHERE colorName = ?1", nativeQuery = true)
    Color getByColorName(@Param("colorName") String colorName);
}
