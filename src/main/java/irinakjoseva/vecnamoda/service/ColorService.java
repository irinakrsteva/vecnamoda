package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.get.ColorGetDto;
import irinakjoseva.vecnamoda.dto.post.ColorPostDto;

import java.util.List;

public interface ColorService {

    public List<ColorGetDto> getAllColors();

    public ColorGetDto addColor(ColorPostDto colorPostDto);

}
