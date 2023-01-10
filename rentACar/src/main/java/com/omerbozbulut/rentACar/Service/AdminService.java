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
        System.out.println(name);
        return adminDao.findByName(name);
    }

    public void addAdmin(String name, String password) {
        String newName = "$"+name;
        adminDao.addAdmin(newName,password);
    }
}
