package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.request.ColorRequestDto;
import irinakjoseva.vecnamoda.dto.response.ColorResponseDto;
import irinakjoseva.vecnamoda.model.Color;
import irinakjoseva.vecnamoda.model.Consignment;

import java.util.List;

public interface ColorService {

    List<ColorResponseDto> getAllColors();

    ColorResponseDto getColor(Integer id);

    Color map(Integer id);

//    public ColorResponseDto addColor(ColorRequestDto colorPostDto);

}
