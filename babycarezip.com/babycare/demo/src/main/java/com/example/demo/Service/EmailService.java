package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendOrderConfirmation(String to, String fullName, String product, int quantity, double totalPrice, String deliveryDate) {
        try {
            // Construct the email content
            String subject = "Order Confirmation - BabyCare Products";
            String body = "Dear " + fullName + ",\n\n"
                    + "Thank you for your order! Here are the details of your purchase:\n\n"
                    + "Product: " + product + "\n"
                    + "Quantity: " + quantity + "\n"
                    + "Total Price: Rs " + totalPrice + "\n"
                    + "Expected Delivery Date: " + deliveryDate + "\n\n"
                    + "We appreciate your trust in BabyCare Products. If you have any questions, feel free to contact us.\n\n"
                    + "Best regards,\n"
                    + "BabyCare Products Team";

            // Create the email message
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to);
            message.setSubject(subject);
            message.setText(body);

            // Send the email
            mailSender.send(message);
            System.out.println("Order confirmation email sent to " + to);
        } catch (Exception e) {
            System.err.println("Error sending email: " + e.getMessage());
        }
    }
}
