package com.vladwick.userservice.repository;

import com.vladwick.userservice.model.ReviewModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewModel, Long> {

    List<ReviewModel> getAllByUserId(String userId);

    List<ReviewModel> getAllByProductId(Long productId);
}
