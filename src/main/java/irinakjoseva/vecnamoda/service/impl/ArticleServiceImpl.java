package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.repository.ArticleRepository;
import irinakjoseva.vecnamoda.service.ArticleService;
import irinakjoseva.vecnamoda.service.dto.ArticleDto;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;

    public ArticleServiceImpl(ArticleRepository repository) {
        this.articleRepository = repository;
    }

    @Override
    public List<Article> getAllAvailableArticles() {
        return this.articleRepository.findAllByStatusEquals(Article.Status.AVAILABLE);
    }

    @Override
    public Article saveArticle(ArticleDto dto) throws IOException {
        Article article = new Article(); //...
        return articleRepository.save(article);
    }

}
