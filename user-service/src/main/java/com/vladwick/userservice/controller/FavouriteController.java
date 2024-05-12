package com.vladwick.userservice.controller;

import com.vladwick.userservice.model.FavouriteModel;
import com.vladwick.userservice.service.FavouriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/favourite")
@RequiredArgsConstructor
public class FavouriteController {

    private final FavouriteService favouriteService;

    @GetMapping("{userId}")
    public List<FavouriteModel> getAllFavouritesByUserId(@PathVariable String userId) {
        return favouriteService.getAllFavouritesByUserId(userId);
    }


}
