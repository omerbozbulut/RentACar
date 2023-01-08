package com.omerbozbulut.rentACar.Controller;

import com.omerbozbulut.rentACar.Entity.Station;
import com.omerbozbulut.rentACar.Service.StationService;
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
@RequestMapping("/stationController")
public class StationController {
    private final StationService stationService;

    @GetMapping(value = "/stations")
    public ResponseEntity<List<Station>> getAllStation(){
        return new ResponseEntity<>(stationService.getAllStation(), OK);
    }
}
