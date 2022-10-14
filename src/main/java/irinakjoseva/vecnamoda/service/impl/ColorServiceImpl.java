package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.request.ColorRequestDto;
import irinakjoseva.vecnamoda.dto.response.ColorResponseDto;
import irinakjoseva.vecnamoda.dto.mapper.ColorMapper;
import irinakjoseva.vecnamoda.model.Color;
import irinakjoseva.vecnamoda.repository.ColorRepository;
import irinakjoseva.vecnamoda.service.ColorService;
import org.springframework.stereotype.Service;

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
    public List<ColorResponseDto> getAllColors() {
        List<Color> colors = colorRepository.findAll();
        return colorMapper.toResponseDtos(colors);
    }

    @Override
    public ColorResponseDto getColor(Integer id) {
        Color color = colorRepository.getById(id);
        return colorMapper.toResponseDto(color);
    }

    @Override
    public Color map(Integer id) {
        return colorRepository.findById(id)
                .orElse(null);
    }

//    @Override
//    public ColorResponseDto addColor(ColorRequestDto colorPostDto) {
//        Color color = colorMapper.requestDtoToModel(colorPostDto);
//        colorRepository.save(color);
//        return colorMapper.toResponseDto(color);
//    }

}
