package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.example.demo.LbwPrediction;
import com.example.demo.LinearRegression;
import com.example.demo.Service.LbwPredictionService;

import java.util.List;

@RestController
@RequestMapping("/api/lbw")
@CrossOrigin(origins = "http://localhost:3000")
public class LbwPredictionController {

    @Autowired
    private LbwPredictionService lbwPredictionService;

    private LinearRegression weightPredictionModel = new LinearRegression();

    @PostMapping("/predict")
    public double predict(@RequestBody LbwPrediction prediction) {
        double[] features = new double[] {
            prediction.getMage(),
            prediction.getMedu(),
            prediction.getMonpre(),
            prediction.getNpvis(),
            prediction.getFage(),
            prediction.getFeduc(),
            prediction.getOmaps(),
            prediction.getFmaps(),
            prediction.getCigs(),
            prediction.getDrink(),
            prediction.getMale(),
            prediction.getMwhte(),
            prediction.getMblck(),
            prediction.getMoth(),
            prediction.getFwhte(),
            prediction.getFblck(),
            prediction.getForth()
        };
        
        // Return the predicted weight
        return weightPredictionModel.predict(features);
    }

    @PostMapping("/save")
    public LbwPrediction savePrediction(@RequestBody LbwPrediction prediction) {
        return lbwPredictionService.savePrediction(prediction);
    }

    @GetMapping
    public List<LbwPrediction> getAllPredictions() {
        return lbwPredictionService.getAllPredictions();
    }
}
