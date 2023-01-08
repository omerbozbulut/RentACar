package com.omerbozbulut.rentACar.Service;

import com.omerbozbulut.rentACar.Entity.Car;
import com.omerbozbulut.rentACar.Repository.*;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Objects;

import static org.springframework.http.HttpStatus.OK;

@Service
@AllArgsConstructor
public class CarService {
    private final CarDao carDao;
    private final ColorDao colorDao;
    private final VehicleClassDao vehicleClassDao;
    private final FuelTypeDao fuelTypeDao;
    private final GearboxTypeDao gearboxTypeDao;
    private final ModelDao modelDao;
    private final StationDao stationDao;

    public List<Car> getAllCars() {
        return carDao.getAllCars();
    }

    public List<Car> getLowToHighCars() {
        return carDao.getLowToHighCars();
    }

    public List<Car> getHighToLowCars() {
        return carDao.getHighToLowCars();
    }

    public List<Car> searchCar(String name) {
        if (Objects.equals(name, "")){
            return carDao.getAllCars();
        }
        return carDao.searchCar(name);
    }

    public int createCar(Car car) {
        String numberPlate = car.getNumberPlate();
        int vehicleClassID = vehicleClassDao.getByNameOfVehicleClass(car.getVehicleClass().getNameOfVehicleClass()).getVehicleClassID();
        int modelID = modelDao.getByModelName(car.getModel().getModelName()).getModelID();
        int gearboxTypeID = gearboxTypeDao.getByGearboxTypeName(car.getGearboxType().getGearboxTypeName()).getGearboxTypeID();
        int fuelTypeID = fuelTypeDao.getByFuelTypeName(car.getFuelType().getFuelTypeName()).getFuelTypeID();
        int colorID = colorDao.getByColorName(car.getColor().getColorName()).getColorID();
        Float price = car.getPrice();
        int stationID = stationDao.getByStationName(car.getStation().getStationName()).getStationID();
        Date productionDate = car.getProductionDate();
        return carDao.saveCar(numberPlate, vehicleClassID, modelID, gearboxTypeID, fuelTypeID, colorID, price, stationID, productionDate);
    }
}
