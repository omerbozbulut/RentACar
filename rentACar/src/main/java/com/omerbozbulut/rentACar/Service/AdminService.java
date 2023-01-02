package com.omerbozbulut.rentACar.Service;

import com.omerbozbulut.rentACar.Entity.Admin;
import com.omerbozbulut.rentACar.Repository.AdminDao;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AdminService {

    private final AdminDao adminDao;

    public Admin authentication (String name) {
        return adminDao.findByName(name);
    }
}
