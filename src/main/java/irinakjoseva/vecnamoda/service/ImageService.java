package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.response.ImageResponseDto;
import irinakjoseva.vecnamoda.model.Image;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

public interface ImageService {

    ImageResponseDto save(MultipartFile file) throws IOException;

    Optional<Byte[]> getById(Long id);

}
