package com.omerbozbulut.rentACar.Repository;

import com.omerbozbulut.rentACar.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface AdminDao extends JpaRepository<Admin,Integer> {

    @Query(value = "SELECT * From admin WHERE name = ?1", nativeQuery = true)
    Admin findByName(@Param("name") String name);

    @Query(value = "{CALL addAdmin(:name, :password)}", nativeQuery = true)
    @Modifying
    @Transactional
    void addAdmin(@Param("name") String name, @Param("password") String password);
}
