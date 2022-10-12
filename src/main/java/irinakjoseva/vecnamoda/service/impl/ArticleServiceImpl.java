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

    public Page<ArticleResponseDto> getAllAvailableArticles(Pageable pageable) {
        return articleRepository.findAllByStatusEquals(Article.Status.AVAILABLE, pageable).map(articleMapper::toResponseDto);
//        List<Article> articles = this.articleRepository.findAllByStatusEquals(Article.Status.AVAILABLE);
//        return articleMapper.toResponseDtos(articles);
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

//    @Override
//    public List<ArticleResponseDto> searchAvailableArticles(String query) {
//        List<Article> articles = articleRepository.findAllByStatusEquals(Article.Status.AVAILABLE);
//        // articles needs a search query from repo
//        return articleMapper.toResponseDtos(articles);
//    }

//    @Override
//    public Page<ArticleResponseDto> getAvailableArticles(PageRequest pageRequest) {
//        Page<Article> articlesPage = articleRepository.findArticlesPageableByStatusEquals(pageRequest, Article.Status.AVAILABLE);
//        return articlesPage.map(articleMapper::toResponseDto);
//    }


    // TODO
    // Create articles (list) + add consignment to all of them
    // Recreate DB without resserved words (condition, decscription, status...)

}
