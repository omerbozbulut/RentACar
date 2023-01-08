package com.omerbozbulut.rentACar.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.omerbozbulut.rentACar.Entity.Car;
import com.omerbozbulut.rentACar.Service.CarService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;

import java.rmi.ServerException;
import java.util.List;
import java.util.Objects;
import static org.springframework.http.HttpStatus.OK;


@CrossOrigin
@RestController
@RequestMapping("/carController")
@AllArgsConstructor
public class CarController {

    private final CarService carService;

    @GetMapping(value = "/cars")
    public ResponseEntity<List<Car>> getCars(){
        return new ResponseEntity<>(carService.getAllCars(), OK);
    }

    @GetMapping(value = "/lowtohighcars")
    public ResponseEntity<List<Car>> lowToHighCars(){
        return new ResponseEntity<>(carService.getLowToHighCars(), OK);
    }

    @GetMapping(value = "/hightolowcars")
    public ResponseEntity<List<Car>> highToLowCars(){
        return new ResponseEntity<>(carService.getHighToLowCars(), OK);
    }

    @GetMapping("/searchcar")
    public ResponseEntity<List<Car>> searchCar(@RequestParam() String name){
        return new ResponseEntity<>(carService.searchCar(name), OK);
    }

    @PostMapping("/createCar")
    public ResponseEntity<Car> createCar(@RequestBody Car car) throws ServerException {
        int resultCar = carService.createCar(car);
        if (resultCar == 0) {
            throw new ServerException("NOT FOUND CAR");
        } else {
            return new ResponseEntity<>(car, HttpStatus.CREATED);
        }
    }
}
