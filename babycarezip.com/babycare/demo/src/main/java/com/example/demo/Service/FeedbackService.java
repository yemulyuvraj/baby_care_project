package com.example.demo.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Feedback;
import com.example.demo.Repository.FeedbackRepository;

@Service
public class FeedbackService {
 private final FeedbackRepository feedbackRepository;

 @Autowired
 public FeedbackService(FeedbackRepository feedbackRepository) {
     this.feedbackRepository = feedbackRepository;
 }

 public Feedback saveFeedback(Feedback feedback) {
     return feedbackRepository.save(feedback);
 }
}
