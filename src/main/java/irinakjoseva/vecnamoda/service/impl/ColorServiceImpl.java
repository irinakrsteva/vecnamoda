package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.request.ColorRequestDto;
import irinakjoseva.vecnamoda.dto.response.ColorResponseDto;
import irinakjoseva.vecnamoda.dto.mapper.ColorMapper;
import irinakjoseva.vecnamoda.model.Color;
import irinakjoseva.vecnamoda.repository.ColorRepository;
import irinakjoseva.vecnamoda.service.ColorService;
import irinakjoseva.vecnamoda.service.exceptions.NotFound404Exception;
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
    public ColorResponseDto getById(Integer id) {
        Color color = colorRepository
                .findById(id)
                .orElseThrow(() -> new NotFound404Exception("id: " + id));
        return colorMapper.toResponseDto(color);
    }

    @Override
    public List<ColorResponseDto> getAll() {
        List<Color> colors = colorRepository.findAll();
        return colorMapper.toResponseDtos(colors);
    }

    @Override
    public Color map(Integer id) {
        return colorRepository.findById(id)
                .orElse(null);
    }

}
