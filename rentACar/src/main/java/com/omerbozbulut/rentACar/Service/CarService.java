package com.omerbozbulut.rentACar.Service;

import com.omerbozbulut.rentACar.Entity.Car;
import com.omerbozbulut.rentACar.Repository.CarDao;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CarService {
    private final CarDao carDao;

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
        return carDao.searchCar(name);
    }
}
