package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.model.ArticleImage;
import irinakjoseva.vecnamoda.service.CategoryService;
import irinakjoseva.vecnamoda.service.ColorService;
import irinakjoseva.vecnamoda.service.ConsignmentService;
import irinakjoseva.vecnamoda.service.SizeService;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring", uses = {
        ConsignmentService.class,
        ColorService.class,
        CategoryService.class,
        SizeService.class
})

public interface ArticleMapper {

    ArticleMapper mapper = Mappers.getMapper(ArticleMapper.class);

    ArticleResponseDto toResponseDto(Article article);

    List<ArticleResponseDto> toResponseDtos(List<Article> articles);

    @Mappings({
            @Mapping(source = "consignmentId", target = "consignment"),
            @Mapping(source = "categoryId", target = "category"),
            @Mapping(source = "colorId", target = "color"),
            @Mapping(source = "sizeId", target = "size")
    })
    Article requestDtoToModel(ArticleRequestDto articlePostDto);

}
