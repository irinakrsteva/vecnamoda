package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.response.CategoryResponseDto;
import irinakjoseva.vecnamoda.model.Category;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel="spring")
public interface CategoryMapper {

    CategoryMapper mapper = Mappers.getMapper(CategoryMapper.class);

    @Mapping(source = "category.id", target = "parentCategoryId")
    CategoryResponseDto toResponseDto(Category category);

    @Mapping(source = "category.id", target = "parentCategoryId")
    List<CategoryResponseDto> toResponseDtos(List<Category> categories);

}
