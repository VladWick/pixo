package com.vladwick.userservice.repository;

import com.vladwick.userservice.model.FavouriteModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavouriteRepository extends JpaRepository<FavouriteModel, Long> {

    List<FavouriteModel> getAllByUserId(String userId);
}
