package com.vladwick.productservice.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class FileUploadForm {
    private MultipartFile file;
}
