package com.omerbozbulut.rentACar.Controller;

import com.omerbozbulut.rentACar.Entity.Customer;
import com.omerbozbulut.rentACar.Service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import static org.springframework.http.HttpStatus.OK;

@CrossOrigin // localhost 8080 ve 3000 farkı için izin ver
@RestController
@RequestMapping("/customerController")
@AllArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    @ResponseBody
    @GetMapping("/authentication")
    public ResponseEntity<Customer> Authentication(@RequestParam() String email){
        return new ResponseEntity<>(customerService.authentication(email), OK);
    }
}
