package com.example.demo;

public class LinearRegression {

    private double[] coefficients;
    private double intercept;

    // Constructor to initialize coefficients and intercept directly
    public LinearRegression() {
        // Coefficients you provided
        coefficients = new double[]{
        		 1.4144242  ,  -3.11477199  , 17.8707391  ,  11.49069861  ,   6.4706234,
        		    4.11279148 ,  37.1910795 ,  159.83546  ,   -11.1941973  ,  -2.22696226,
        		  100.5343485  ,  15.43327858 ,-185.78763517 , 170.35435658 ,  77.39212653,
        		  275.10206956 ,-352.49419609
        };

        // Intercept you provided
        intercept =  1099.2565088788401;
    }

    // Predict method
    public double predict(double[] features) {
        if (features.length != coefficients.length) {
            throw new IllegalArgumentException("Feature array length does not match the number of coefficients.");
        }

        double predictedValue = intercept;
        for (int i = 0; i < coefficients.length; i++) {
            predictedValue += coefficients[i] * features[i];
        }

        return predictedValue;
    }

    // Getters
    public double[] getCoefficients() {
        return coefficients;
    }

    public double getIntercept() {
        return intercept;
    }
}
