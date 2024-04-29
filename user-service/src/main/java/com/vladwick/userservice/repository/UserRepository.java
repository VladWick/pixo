package com.vladwick.userservice.repository;

import com.vladwick.userservice.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Review, Long> {
}