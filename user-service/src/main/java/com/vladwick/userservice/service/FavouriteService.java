package com.vladwick.userservice.service;

import com.vladwick.userservice.model.FavouriteModel;
import com.vladwick.userservice.repository.FavouriteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service@Slf4j
@RequiredArgsConstructor
public class FavouriteService {

    private final FavouriteRepository favouriteRepository;

    public List<FavouriteModel> getAllFavouritesByUserId(String userId) {
        return favouriteRepository.getAllByUserId(userId);
    }

}
