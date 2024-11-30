package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Order;
import com.example.demo.Service.EmailService;
import com.example.demo.Service.OrderService;

import java.text.SimpleDateFormat;
import java.util.Date;

@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order savedOrder = orderService.saveOrder(order);

        // Calculate the expected delivery date (3 days from now)
        Date deliveryDate = new Date();
        deliveryDate.setTime(deliveryDate.getTime() + (3 * 24 * 60 * 60 * 1000)); // Add 3 days
        SimpleDateFormat dateFormat = new SimpleDateFormat("EEEE, MMM dd, yyyy");

        // Pass all required arguments to the sendOrderConfirmation method
        emailService.sendOrderConfirmation(
                order.getEmail(),                // Recipient's email
                order.getFullName(),
                // Full name
                order.getProduct(),              // Product name
                order.getQuantity(),             // Quantity
                order.getTotalPrice(),           // Total price
                dateFormat.format(deliveryDate)  // Formatted delivery date
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(savedOrder);
    }
}
