package com.omerbozbulut.rentACar.Repository;

import com.omerbozbulut.rentACar.Entity.Color;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ColorDao extends JpaRepository<Color, Integer> {
}
