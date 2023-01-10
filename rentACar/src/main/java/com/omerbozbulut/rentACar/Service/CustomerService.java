package com.omerbozbulut.rentACar.Service;

import com.omerbozbulut.rentACar.Entity.Customer;
import com.omerbozbulut.rentACar.Repository.CustomerDao;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CustomerService {
    private final CustomerDao customerDao;

    public Customer authentication (String email) {
        return customerDao.findByEmail(email);
    }

    public void deleteCustomer(int id){
        customerDao.deleteCustomerWithIdentity(id);
    }
}
