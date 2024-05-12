package com.vladwick.productservice.service;

import com.vladwick.productservice.model.CategoryModel;
import com.vladwick.productservice.model.ProductModel;
import com.vladwick.productservice.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public CategoryModel findCategoryByTitle(String categoryTitle) {
        return categoryRepository.getByTitle(categoryTitle);
    }

    public List<CategoryModel> getAllCategories() {
        return categoryRepository.findAll();
    }

}
