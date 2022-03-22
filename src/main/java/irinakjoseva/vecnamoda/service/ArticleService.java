package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.service.dto.ArticleDto;

import java.io.IOException;
import java.util.List;

public interface ArticleService {

    List<Article> getAllAvailableArticles();

    Article saveArticle(ArticleDto dto) throws IOException;

}
