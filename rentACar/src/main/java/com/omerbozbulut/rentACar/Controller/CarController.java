package com.omerbozbulut.rentACar.Controller;


import com.omerbozbulut.rentACar.Entity.Car;
import com.omerbozbulut.rentACar.Service.CarService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;


@CrossOrigin
@RestController
@RequestMapping("/carController")
@AllArgsConstructor
public class CarController {

    private final CarService carService;

    @ResponseBody
    @GetMapping(value = "/cars")
    public ResponseEntity<List<Car>> getCars(){
        return new ResponseEntity<>(carService.getAllCar(), OK);
    }


}
