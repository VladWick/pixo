package com.vladwick.userservice.service;

import com.vladwick.userservice.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.vladwick.userservice.repository.ReviewRepository;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getAll() {
        return reviewRepository.findAll();
    };

    public Review addReview(Review review) {
        return reviewRepository.save(review);
    }
}
