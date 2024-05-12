package com.vladwick.productservice.controller;

import com.vladwick.productservice.model.CategoryModel;
import com.vladwick.productservice.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product/category")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<CategoryModel> getAllCategories() {
        return categoryService.getAllCategories();
    }

}
