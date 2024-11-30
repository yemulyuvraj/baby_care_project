package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.LbwPrediction;
import com.example.demo.Repository.LbwPredictionRepository;

import java.util.List;

@Service
public class LbwPredictionService {

    @Autowired
    private LbwPredictionRepository repository;

    public LbwPrediction savePrediction(LbwPrediction prediction) {
        return repository.save(prediction);
    }

    // Add this method to retrieve all predictions
    public List<LbwPrediction> getAllPredictions() {
        return repository.findAll();
    }
}
