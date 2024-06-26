package com.vladwick.productservice.repository;

import com.vladwick.productservice.model.CategoryModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryModel, Long>  {

    CategoryModel getByTitle(String categoryTitle);

}
