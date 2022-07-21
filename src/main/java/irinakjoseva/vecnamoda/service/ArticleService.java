package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;

import java.io.IOException;
import java.util.List;

public interface ArticleService {

    List<ArticleResponseDto> getAllAvailableArticles();

    ArticleResponseDto saveArticle(ArticleRequestDto articlePostDto) throws IOException;

}
