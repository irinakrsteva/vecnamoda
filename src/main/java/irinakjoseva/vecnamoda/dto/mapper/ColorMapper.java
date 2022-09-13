package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.response.ColorResponseDto;
import irinakjoseva.vecnamoda.dto.request.ColorRequestDto;
import irinakjoseva.vecnamoda.model.Color;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ColorMapper {

    ColorMapper mapper = Mappers.getMapper(ColorMapper.class);

    List<ColorResponseDto> toResponseDtos(List<Color> colors);

    ColorResponseDto toResponseDto(Color color);

}
