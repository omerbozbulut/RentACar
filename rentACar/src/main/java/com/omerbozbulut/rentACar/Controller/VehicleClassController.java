package com.omerbozbulut.rentACar.Controller;

import com.omerbozbulut.rentACar.Entity.VehicleClass;
import com.omerbozbulut.rentACar.Service.VehicleClassService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@CrossOrigin
@AllArgsConstructor
@RestController
@RequestMapping("/vehicleClassController")
public class VehicleClassController {

    private final VehicleClassService vehicleClassService;

    @GetMapping(value = "/vehicleClasses")
            public ResponseEntity<List<VehicleClass>> getAllVehicleClass(){
        return new ResponseEntity<>(vehicleClassService.getAllStation(), OK);
    }
}
