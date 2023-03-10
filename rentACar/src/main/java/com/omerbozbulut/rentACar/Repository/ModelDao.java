package com.omerbozbulut.rentACar.Repository;

import com.omerbozbulut.rentACar.Entity.Model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ModelDao extends JpaRepository<Model,Integer> {
    @Query(value = "SELECT * FROM model WHERE modelName = ?1", nativeQuery = true)
    Model getByModelName(@Param("modelName") String modelName);

    @Query(value = "Select * From model", nativeQuery = true)
    List<Model> getAllModel();
}
