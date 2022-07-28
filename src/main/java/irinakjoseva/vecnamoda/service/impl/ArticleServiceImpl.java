package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.dto.mapper.ArticleMapper;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.repository.ArticleRepository;
import irinakjoseva.vecnamoda.service.ArticleService;
import org.springframework.stereotype.Service;

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
    public List<ArticleResponseDto> getAllAvailableArticles() {
        List<Article> articles = this.articleRepository.findAllByStatusEquals(Article.Status.AVAILABLE);
        return articleMapper.toResponseDtos(articles);
    }

    @Override // ?
    public ArticleResponseDto saveArticle(ArticleRequestDto articlePostDto) throws IOException {
        Article article = articleMapper.requestDtoToModel(articlePostDto);
        articleRepository.save(article);
        return articleMapper.toResponseDto(article);
    }


    // TODO
    // Create articles (list) + add consignment to all of them
    // Recreate DB without resserved words (condition, decscription, status...)

}
