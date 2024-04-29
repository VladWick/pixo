package com.vladwick.userservice.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.vladwick.userservice.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.vladwick.userservice.service.ReviewService;

import java.util.List;

@RestController
@RequestMapping("api/user/review")
@RequiredArgsConstructor
@Slf4j
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public List<Review> getAll() {
        return reviewService.getAll();
    }

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public Review addReview(@RequestBody Review review) {
        return reviewService.addReview(review);
    }

}
