package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.dto.post.ArticlePostDto;
import irinakjoseva.vecnamoda.model.User;

import java.io.IOException;
import java.util.List;

public interface ArticleService {

    List<Article> getAllAvailableArticles();

    Article saveArticle(ArticlePostDto articlePostDto) throws IOException;

}
