package com.omerbozbulut.rentACar.Repository;

import com.omerbozbulut.rentACar.Entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandDao extends JpaRepository<Brand, Integer> {

}
