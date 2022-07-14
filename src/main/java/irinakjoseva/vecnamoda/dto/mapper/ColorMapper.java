package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.get.ColorGetDto;
import irinakjoseva.vecnamoda.dto.post.ColorPostDto;
import irinakjoseva.vecnamoda.model.Color;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ColorMapper {

    ColorMapper mapper = Mappers.getMapper(ColorMapper.class);

    List<ColorGetDto> toGetDtos(List<Color> colors);

    Color postDtoToModel(ColorPostDto colorPostDto);

    ColorGetDto toGetDto(Color color);

}
