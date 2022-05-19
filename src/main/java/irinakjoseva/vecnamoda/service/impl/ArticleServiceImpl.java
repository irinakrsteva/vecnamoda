package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.mapper.ArticleMapper;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.model.Consignment;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.repository.ArticleRepository;
import irinakjoseva.vecnamoda.service.ArticleService;
import irinakjoseva.vecnamoda.dto.post.ArticlePostDto;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;
    private final ArticleMapper articleMapper;

    public ArticleServiceImpl(ArticleRepository repository, ArticleMapper articleMapper) {
        this.articleRepository = repository;
        this.articleMapper = articleMapper;
    }

    @Override
    public List<Article> getAllAvailableArticles() {
        return this.articleRepository.findAllByStatusEquals(Article.Status.AVAILABLE);
    }

    @Override // ?
    public Article saveArticle(ArticlePostDto articlePostDto, User user) throws IOException {
        Article article = articleMapper.PostDtoToModel(articlePostDto);
        return articleRepository.save(article);
    }



    // Create articles (list) + add consignment to all of them

}
