package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.get.UserGetDto;
import irinakjoseva.vecnamoda.dto.post.UserPostDto;
import irinakjoseva.vecnamoda.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserMapper mapper = Mappers.getMapper(UserMapper.class);

    UserGetDto toGetDto(User user);

    UserPostDto toPostDto(User user);

    User getDtoToModel(UserGetDto dto);

    User postDtoToModel(UserPostDto dto);

}
