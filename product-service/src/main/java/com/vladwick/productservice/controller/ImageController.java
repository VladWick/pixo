package com.vladwick.productservice.controller;

import com.vladwick.productservice.model.ImageModel;
import com.vladwick.productservice.service.ImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/product/image")
@RequiredArgsConstructor
@Slf4j
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping("upload")
    @ResponseStatus(HttpStatus.CREATED)
    public ImageModel uploadImage(MultipartFile file) throws IOException {
        log.info("LOG file: " + file);
        return imageService.upload(file);
    }

}
