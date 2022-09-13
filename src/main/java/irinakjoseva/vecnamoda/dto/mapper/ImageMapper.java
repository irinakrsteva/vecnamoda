package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.response.ImageResponseDto;
import irinakjoseva.vecnamoda.model.Image;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ImageMapper {

    ImageMapper mapper = Mappers.getMapper(ImageMapper.class);

    ImageResponseDto toResponseDto(Image image);

}
