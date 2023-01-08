package com.omerbozbulut.rentACar.Service;

import com.omerbozbulut.rentACar.Entity.Model;
import com.omerbozbulut.rentACar.Repository.ModelDao;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ModelService {
    private ModelDao modelDao;

    public List<Model> getAllModels(){
        return modelDao.getAllModel();}
}
