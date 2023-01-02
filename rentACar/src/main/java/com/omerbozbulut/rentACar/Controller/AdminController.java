package com.omerbozbulut.rentACar.Controller;

import com.omerbozbulut.rentACar.Entity.Admin;
import com.omerbozbulut.rentACar.Service.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.OK;

@RestController
@CrossOrigin
@RequestMapping("/adminController")
@AllArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @GetMapping("/authentication")
    private ResponseEntity<Admin> Authentication(@RequestParam String name){
        return new ResponseEntity<>(adminService.authentication(name),OK);
    }
}
