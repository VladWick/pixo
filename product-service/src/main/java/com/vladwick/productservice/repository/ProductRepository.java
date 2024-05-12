package com.vladwick.productservice.repository;

import com.vladwick.productservice.model.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, Long> {

    List<ProductModel> getAllBySellerId(String sellerId);

    List<ProductModel> getAllByCategoryId(Long categoryId);



//    @Query("select product from ProductModel product where ")
//    List<ProductModel> searchByCategory(String categoryTitle);
//
//    @Query("select volunteer from VolunteerModel volunteer where lower(volunteer.email) in (:mails)")
//    List<VolunteerModel> getAllByEmailIn(@Param("mails") Collection<String> mails);

}
