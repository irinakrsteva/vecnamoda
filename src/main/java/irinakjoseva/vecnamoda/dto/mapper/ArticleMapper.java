package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.service.CategoryService;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring", uses = {CategoryService.class})
public interface ArticleMapper {

    ArticleMapper mapper = Mappers.getMapper(ArticleMapper.class);

    ArticleResponseDto toGetDto(Article article);

    ArticleRequestDto toPostDto(Article article);

    Article getDtoToModel(ArticleResponseDto articleGetDto);

    Article postDtoToModel(ArticleRequestDto articlePostDto);

    List<ArticleResponseDto> toGetDtos(List<Article> articles);
}
