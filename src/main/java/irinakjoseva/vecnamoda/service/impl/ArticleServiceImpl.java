package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.dto.mapper.ArticleMapper;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.model.ArticleImage;
import irinakjoseva.vecnamoda.model.Image;
import irinakjoseva.vecnamoda.repository.ArticleImageRepository;
import irinakjoseva.vecnamoda.repository.ArticleRepository;
import irinakjoseva.vecnamoda.repository.ImageRepository;
import irinakjoseva.vecnamoda.service.ArticleService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;
    private final ArticleImageRepository articleImageRepository;
    private final ImageRepository imageRepository;
    private final ArticleMapper articleMapper;

    public ArticleServiceImpl(ArticleRepository repository, ArticleImageRepository articleImageRepository, ImageRepository imageRepository, ArticleMapper articleMapper) {
        this.articleRepository = repository;
        this.articleImageRepository = articleImageRepository;
        this.imageRepository = imageRepository;
        this.articleMapper = articleMapper;
    }

    public Page<ArticleResponseDto> searchAvailableArticles(Pageable pageable,
                                                            String searchString,
                                                            Double startPrice,
                                                            Double endPrice,
                                                            List<Article.Condition> articleConditions,
                                                            List<Integer> categoryIds,
                                                            List<Integer> sizeIds,
                                                            List<Integer> colorIds) {
        return articleRepository.findArticlesPageable(Article.Status.AVAILABLE, pageable, searchString,
                startPrice, endPrice, articleConditions, categoryIds, sizeIds, colorIds)
                .map(articleMapper::toResponseDto);
    }

    @Override
    @Transactional
    public ArticleResponseDto saveArticle(ArticleRequestDto articleRequestDto) {
        Article article = articleMapper.requestDtoToModel(articleRequestDto);
        article = articleRepository.save(article);

        List<Image> images = imageRepository.findAllById(articleRequestDto.imageIds);
        for (Image image : images) {
            ArticleImage articleImage = articleImageRepository.save(new ArticleImage(article, image));
            article.addArticleImage(articleImage);
        }

        return articleMapper.toResponseDto(article);
    }

    @Override
    @Transactional
    public List<ArticleResponseDto> changeStatusesToSold(List<Long> ids) {
        List<Article> articles = articleRepository.findAllById(ids);
        for(Article article : articles) {
            if(article.getStatus() != Article.Status.AVAILABLE)
                throw new RuntimeException();
            article.setStatus(Article.Status.SOLD);
            articleRepository.save(article);
        }
        return articles.stream().map(articleMapper::toResponseDto).collect(Collectors.toList());
    }

//    @Override
//    public Page<ArticleResponseDto> searchArticlesBoughtByUser(Pageable pageable, Long userId) {
//        return articleRepository.findArticlesBoughtByUserIdPageable(Article.Status.AVAILABLE, pageable, userId)
//                                .map(articleMapper::toResponseDto);
//    }

}
