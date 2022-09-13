package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.response.SizeResponseDto;
import irinakjoseva.vecnamoda.model.Size;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SizeMapper {

    SizeMapper mapper = Mappers.getMapper(SizeMapper.class);

    SizeResponseDto toResponseDto(Size size);

    List<SizeResponseDto> toResponseDtos(List<Size> sizes);

}
