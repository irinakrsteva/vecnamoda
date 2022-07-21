package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.response.UserResponseDto;
import irinakjoseva.vecnamoda.dto.request.UserRequestDto;
import irinakjoseva.vecnamoda.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserMapper mapper = Mappers.getMapper(UserMapper.class);

    UserResponseDto toGetDto(User user);

    UserRequestDto toPostDto(User user);

    User getDtoToModel(UserResponseDto dto);

    User postDtoToModel(UserRequestDto dto);

}
