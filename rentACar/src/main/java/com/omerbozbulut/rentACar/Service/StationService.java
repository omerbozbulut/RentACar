package com.omerbozbulut.rentACar.Service;

import com.omerbozbulut.rentACar.Entity.Station;
import com.omerbozbulut.rentACar.Repository.StationDao;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class StationService {
    private StationDao stationDao;

    public List<Station> getAllStation(){
        return stationDao.getAllStation();
    }
}
