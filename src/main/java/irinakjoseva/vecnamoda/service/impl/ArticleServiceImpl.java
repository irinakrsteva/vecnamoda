package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.repository.ArticleRepository;
import irinakjoseva.vecnamoda.service.ArticleService;
import irinakjoseva.vecnamoda.controller.dto.ArticleDto;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;

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

    @Transactional
    public Article saveArticle(ArticleDto articleDto, User user) throws IOException {
        Article article = new Article(); //...
        return articleRepository.save(article);
    }

}
