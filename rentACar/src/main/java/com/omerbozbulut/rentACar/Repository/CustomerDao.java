package com.omerbozbulut.rentACar.Repository;


import com.omerbozbulut.rentACar.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CustomerDao extends JpaRepository<Customer, Integer> {
    @Query(value = "SELECT * From customer WHERE email = ?1", nativeQuery = true)
    Customer findByEmail(@Param("email") String email);
}
