package com.vladwick.productservice.controller;

import com.vladwick.productservice.dto.ProductRequest;
import com.vladwick.productservice.model.ProductModel;
import com.vladwick.productservice.service.ProductService;
import jakarta.annotation.Nullable;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@RestController
@RequestMapping("/api/product")
@RequiredArgsConstructor
@Slf4j
public class ProductController {

    private final ProductService productService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductModel> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("{sellerId}")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductModel> getAllProductsBySellerId(@PathVariable String sellerId) {
        return productService.getAllProductsBySellerId(sellerId);
    }

    @GetMapping("search/category")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductModel> searchByCategory(@RequestParam String categoryTitle) {
        return productService.searchByCategory(categoryTitle);
    }

    @GetMapping("search/word")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductModel> searchByWord(@RequestParam String keyword) {
        return productService.searchByWord(keyword);
    }

    @GetMapping("search")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductModel> searchByCategoryAndWord(@RequestParam String keyword, @RequestParam String categoryTitle) {
        return productService.searchByCategoryAndWord(keyword, categoryTitle);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ProductModel> createProduct(@RequestBody ProductModel form) throws IOException {
        log.info("PRODUCT: " + form);
        return ResponseEntity.ok(productService.save(form));
    }

}
