package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.dto.mapper.ArticleMapper;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.model.ArticleImage;
import irinakjoseva.vecnamoda.model.Category;
import irinakjoseva.vecnamoda.model.Image;
import irinakjoseva.vecnamoda.repository.ArticleImageRepository;
import irinakjoseva.vecnamoda.repository.ArticleRepository;
import irinakjoseva.vecnamoda.repository.CategoryRepository;
import irinakjoseva.vecnamoda.repository.ImageRepository;
import irinakjoseva.vecnamoda.service.ArticleService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;
    private final ArticleImageRepository articleImageRepository;
    private final ImageRepository imageRepository;
    private final ArticleMapper articleMapper;
//    private final CategoryRepository categoryRepository;

    public ArticleServiceImpl(ArticleRepository repository, ArticleImageRepository articleImageRepository, ImageRepository imageRepository, ArticleMapper articleMapper) {
        this.articleRepository = repository;
        this.articleImageRepository = articleImageRepository;
        this.imageRepository = imageRepository;
        this.articleMapper = articleMapper;
//        this.categoryRepository = categoryRepository;
    }

    public Page<ArticleResponseDto> searchAvailableArticles(Pageable pageable,
                                                            String searchString,
                                                            Double startPrice,
                                                            Double endPrice,
                                                            List<Article.Condition> articleConditions,
                                                            List<Integer> categoryIds,
                                                            List<Integer> sizeIds,
                                                            List<Integer> colorIds) {
//        List<Category> categories = categoryRepository.findAllById(categoryIds);
//        List<Integer> allCategoryIds = new ArrayList<>();
//        categories.forEach(category -> {
//            category.getRecursiveCategories().forEach(recursiveCategory -> {
//                allCategoryIds.add(recursiveCategory.getId());
//            });
//        });
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

//    @Override
//    @Transactional
//    public ArticleResponseDto changeStatus(Long id, Article.Status status) {
//        Article article = articleRepository.getById(id);
//        if (article == null) {
//            return null;
//        }
//        article.setStatus(status);
//        articleRepository.save(article);
//        return articleMapper.toResponseDto(article);
//    }

    @Override
    @Transactional
    public List<ArticleResponseDto> changeStatuses(List<Long> ids, Article.Status status) {
        List<Article> articles = articleRepository.findAllById(ids);
        for(Article article : articles) {
            if(article.getStatus() != Article.Status.AVAILABLE) throw new RuntimeException();
            article.setStatus(status);
            articleRepository.save(article);
        }
        return articles.stream().map(articleMapper::toResponseDto).collect(Collectors.toList());
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
