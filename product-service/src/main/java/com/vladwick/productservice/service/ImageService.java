package com.vladwick.productservice.service;

import com.vladwick.productservice.model.ImageModel;
import com.vladwick.productservice.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@Slf4j
@RequiredArgsConstructor
public class ImageService {

    private final ImageRepository imageRepository;

    public Long save(ImageModel image) {
        return imageRepository.save(image).getId();
    }

    public ImageModel upload(@RequestBody MultipartFile file) throws IOException {
        log.info("File: " + file);

        ImageModel image = new ImageModel();
        image.setName(file.getName());
        image.setContent(file.getBytes());

        return imageRepository.save(image);
    }
}
