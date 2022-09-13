package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.mapper.ImageMapper;
import irinakjoseva.vecnamoda.dto.response.ImageResponseDto;
import irinakjoseva.vecnamoda.model.Image;
import irinakjoseva.vecnamoda.repository.ImageRepository;
import irinakjoseva.vecnamoda.service.ImageService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class ImageServiceImpl implements ImageService {

    private final ImageRepository imageRepository;
    private final ImageMapper imageMapper;

    public ImageServiceImpl(ImageRepository imageRepository, ImageMapper imageMapper) {
        this.imageRepository = imageRepository;
        this.imageMapper = imageMapper;
    }

    @Override
    public ImageResponseDto save(MultipartFile file) throws IOException {

        byte[] primitiveBytes = file.getBytes();
        Byte[] bytes = new Byte[primitiveBytes.length];

        for (int i = 0; i < primitiveBytes.length; i++) {
            bytes[i] = primitiveBytes[i];
        }

        Image image = new Image(bytes, file.getOriginalFilename(), file.getSize(), file.getContentType());
        imageRepository.save(image);
        return imageMapper.toResponseDto(image);
    }

    @Override
    public Optional<Byte[]> getById(Long id) {
        return imageRepository.findById(id).map(Image::getData);
    }
}
