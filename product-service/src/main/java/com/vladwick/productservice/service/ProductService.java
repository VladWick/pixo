package com.vladwick.productservice.service;

import com.vladwick.productservice.dto.ProductRequest;
import com.vladwick.productservice.model.CategoryModel;
import com.vladwick.productservice.model.ImageModel;
import com.vladwick.productservice.model.ProductModel;
import com.vladwick.productservice.repository.ProductRepository;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryService categoryService;
    private final ImageService imageService;

    public ProductModel save(ProductModel product) throws IOException {

//        MultipartFile file = productRequest.getImage();
//
//        Long imageId = null;
//        if (file != null) {
//            ImageModel image = new ImageModel();
//            image.setContent(file.getBytes());
//            image.setName(file.getName());
//
//            imageId = imageService.save(image);
//        }
//
//        ProductModel productModel = ProductModel.builder()
//                .categoryId(productRequest.getCategoryId())
//                .price(productRequest.getPrice())
//                .amountInStock(productRequest.getAmountInStock())
//                .description(productRequest.getDescription())
//                .title(productRequest.getTitle())
//                .createDate(new Date())
//                .lastUpdateDate(new Date())
//                .sellerId(productRequest.getSellerId())
//                .isConfirmForSale(productRequest.getIsConfirmForSale()).imageId(imageId)
//                .build();

        product.setCreateDate(new Date());
        product.setLastUpdateDate(new Date());
        product.setIsConfirmForSale(false);

        return productRepository.save(product);
    }

    public List<ProductModel> getAllProducts() {
        return productRepository.findAll();
    }

    public List<ProductModel> getAllProductsBySellerId(String sellerId) {
        return productRepository.getAllBySellerId(sellerId);
    }

    public List<ProductModel> searchByCategory(String categoryTitle) {
        CategoryModel categoryModel = categoryService.findCategoryByTitle(categoryTitle);

        if (categoryModel == null) {
            return new ArrayList<>();
        } else {
            return productRepository.getAllByCategoryId(categoryModel.getId());
        }
    }

    public List<ProductModel> searchByWord(String keyword) {
        List<ProductModel> products = productRepository.findAll();
        return search(products, keyword);
    }

    public List<ProductModel> searchByCategoryAndWord(String keyword, String categoryTitle) {
        List<ProductModel> productsByCategory = searchByCategory(categoryTitle);
        return search(productsByCategory, keyword);
    }

    private List<ProductModel> search(List<ProductModel> products, String keyword) {
        List<ProductModel> foundProducts = new ArrayList<>();
        for (ProductModel product: products) {
            if (product.getTitle().contains(keyword)) {
                foundProducts.add(product);
            }
        }
        for (ProductModel product: products) {
            if (product.getDescription().contains(keyword)) {
                foundProducts.add(product);
            }
        }
        return foundProducts;
    }

}
