package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.response.CategoryResponseDto;
import irinakjoseva.vecnamoda.dto.response.ColorResponseDto;
import irinakjoseva.vecnamoda.model.Category;
import irinakjoseva.vecnamoda.model.Color;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel="spring")
public interface CategoryMapper {

    CategoryMapper mapper = Mappers.getMapper(CategoryMapper.class);

    @Mappings({
//            @Mapping(source = "parentCategory.id", target = "parentCategoryId"),
            @Mapping(source = "childrenCategories", target = "childrenCategories")
    })
    CategoryResponseDto toResponseDto(Category category);

//    @Mapping(source = "category.id", target = "parentCategoryId")
    List<CategoryResponseDto> toResponseDtos(List<Category> categories);

}
