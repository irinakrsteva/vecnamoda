package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.service.CategoryService;
import irinakjoseva.vecnamoda.service.ColorService;
import irinakjoseva.vecnamoda.service.ConsignmentService;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring", uses = {
        ConsignmentService.class,
        ColorService.class,
        CategoryService.class
})

public interface ArticleMapper {

    ArticleMapper mapper = Mappers.getMapper(ArticleMapper.class);

    @Mapping(source = "consignment.id", target = "consignmentId")
    ArticleResponseDto toResponseDto(Article article);

    ArticleRequestDto toRequestDto(Article article);

    Article ResponseDtoToModel(ArticleResponseDto articleGetDto);

    @Mapping(source = "consignmentId", target = "consignment")
    Article requestDtoToModel(ArticleRequestDto articlePostDto);

    List<ArticleResponseDto> toResponseDtos(List<Article> articles);
}
