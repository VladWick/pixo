package com.vladwick.userservice.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.vladwick.userservice.model.ReviewModel;
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

    private final ReviewService reviewService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<ReviewModel> getAll() {
        return reviewService.getAll();
    }


    @GetMapping("user/{userId}")
    @ResponseStatus(HttpStatus.OK)
    public List<ReviewModel> getAllByUserId(@PathVariable String userId) {
        return reviewService.getAllByUserId(userId);
    }

    @GetMapping("product/{productId}")
    @ResponseStatus(HttpStatus.OK)
    public List<ReviewModel> getAllByProductId(@PathVariable Long productId) {
        return reviewService.getAllByProductId(productId);
    }

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public ReviewModel addReview(@RequestBody ReviewModel reviewModel) {
        return reviewService.addReview(reviewModel);
    }

}
