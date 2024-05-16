package com.vladwick.userservice.controller;

import com.vladwick.userservice.model.FavouriteModel;
import com.vladwick.userservice.model.ReviewModel;
import com.vladwick.userservice.service.FavouriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user/favourite")
@RequiredArgsConstructor
public class FavouriteController {

    private final FavouriteService favouriteService;

    @GetMapping("{userId}")
    public List<FavouriteModel> getAllFavouritesByUserId(@PathVariable String userId) {
        return favouriteService.getAllFavouritesByUserId(userId);
    }

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public FavouriteModel addFavourite(@RequestBody FavouriteModel favouriteModel) {
        return favouriteService.addFavourite(favouriteModel);
    }


}
