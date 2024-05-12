package ru.xdsoft.rtk.orgviewapp.org.view.form;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;
import ru.xdsoft.rtk.orgviewapp.common.validation.Orders;

import javax.validation.constraints.NotNull;

@Data
public class FileUploadForm {

    @NotNull(groups = Orders.Order1.class)
    private MultipartFile file;

}
