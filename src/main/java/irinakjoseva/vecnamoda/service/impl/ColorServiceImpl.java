package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.get.ColorGetDto;
import irinakjoseva.vecnamoda.dto.mapper.ColorMapper;
import irinakjoseva.vecnamoda.dto.post.ColorPostDto;
import irinakjoseva.vecnamoda.model.Color;
import irinakjoseva.vecnamoda.repository.ColorRepository;
import irinakjoseva.vecnamoda.service.ColorService;
import org.springframework.stereotype.Service;

import java.awt.image.ImageProducer;
import java.util.List;

@Service
public class ColorServiceImpl implements ColorService {

    private final ColorRepository colorRepository;
    private final ColorMapper colorMapper;

    public ColorServiceImpl(ColorRepository colorRepository, ColorMapper colorMapper) {
        this.colorRepository = colorRepository;
        this.colorMapper = colorMapper;
    }

    @Override
    public List<ColorGetDto> getAllColors() {
        List<Color> colors = colorRepository.findAll();
        return colorMapper.toGetDtos(colors);
    }

    @Override
    public ColorGetDto addColor(ColorPostDto colorPostDto) {
        Color color = colorMapper.postDtoToModel(colorPostDto);
        colorRepository.save(color);
        return colorMapper.toGetDto(color);
    }

}
