package com.vladwick.userservice.service;

import com.vladwick.userservice.model.ReviewModel;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.vladwick.userservice.repository.ReviewRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;

    public List<ReviewModel> getAll() {
        return reviewRepository.findAll();
    };

    public ReviewModel addReview(ReviewModel reviewModel) {
        return reviewRepository.save(reviewModel);
    }

    public List<ReviewModel> getAllByUserId(String userId) {
        return reviewRepository.getAllByUserId(userId);
    }

    public List<ReviewModel> getAllByProductId(Long productId) {
        return reviewRepository.getAllByProductId(productId);
    }
}
