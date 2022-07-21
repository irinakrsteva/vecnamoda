package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.request.ColorRequestDto;
import irinakjoseva.vecnamoda.dto.response.ColorResponseDto;

import java.util.List;

public interface ColorService {

    public List<ColorResponseDto> getAllColors();

    public ColorResponseDto addColor(ColorRequestDto colorPostDto);

}
