package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.response.UserResponseDto;
import irinakjoseva.vecnamoda.dto.request.UserRequestDto;
import irinakjoseva.vecnamoda.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserMapper mapper = Mappers.getMapper(UserMapper.class);

    UserResponseDto toResponseDto(User user);

    UserRequestDto toRequestDto(User user);

    User responseDtoToModel(UserResponseDto dto);

    User requestDtoToModel(UserRequestDto dto);

}
