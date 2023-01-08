package com.omerbozbulut.rentACar.Service;

import com.omerbozbulut.rentACar.Entity.VehicleClass;
import com.omerbozbulut.rentACar.Repository.VehicleClassDao;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class VehicleClassService {
    private VehicleClassDao vehicleClassDao;

    public List<VehicleClass> getAllStation(){
        return vehicleClassDao.getAllVehicleClass();
    }
}
