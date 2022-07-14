package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.get.ArticleGetDto;
import irinakjoseva.vecnamoda.dto.post.ArticlePostDto;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.service.CategoryService;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring", uses = {CategoryService.class})
public interface ArticleMapper {

    ArticleMapper mapper = Mappers.getMapper(ArticleMapper.class);

    ArticleGetDto toGetDto(Article article);

    ArticlePostDto toPostDto(Article article);

    Article getDtoToModel(ArticleGetDto articleGetDto);

    Article postDtoToModel(ArticlePostDto articlePostDto);

    List<ArticleGetDto> toGetDtos(List<Article> articles);
}
