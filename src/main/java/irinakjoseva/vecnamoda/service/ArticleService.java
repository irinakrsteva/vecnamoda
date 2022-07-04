package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.get.ArticleGetDto;
import irinakjoseva.vecnamoda.dto.post.ArticlePostDto;

import java.io.IOException;
import java.util.List;

public interface ArticleService {

    List<ArticleGetDto> getAllAvailableArticles();

    ArticleGetDto saveArticle(ArticlePostDto articlePostDto) throws IOException;

}
