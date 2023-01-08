package com.omerbozbulut.rentACar.Controller;

import com.omerbozbulut.rentACar.Entity.Model;
import com.omerbozbulut.rentACar.Service.ModelService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@CrossOrigin
@RestController
@RequestMapping("/modelController")
@AllArgsConstructor
public class ModelController {
    private ModelService modelService;

    @GetMapping(value = "/models")
    public ResponseEntity<List<Model>> getAllModels(){
        return new ResponseEntity<>(modelService.getAllModels(), OK);
    }
}
