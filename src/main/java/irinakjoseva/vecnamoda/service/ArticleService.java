package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.service.exceptions.ArticleAlreadySoldException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;


public interface ArticleService {

    Page<ArticleResponseDto> getAvailableArticles(Pageable pageable,
                                                  String searchString,
                                                  Double startPrice,
                                                  Double endPrice,
                                                  List<Article.Condition> articleConditions,
                                                  List<Integer> categoryIds,
                                                  List<Integer> sizeIds,
                                                  List<Integer> colorIds);

    ArticleResponseDto saveArticle(ArticleRequestDto articlePostDto) throws IOException;

    List<ArticleResponseDto> changeStatusesToSold(List<Long> ids) throws ArticleAlreadySoldException;

    Page<ArticleResponseDto> getArticlesForSaleByUser(Pageable pageable, Long userId);


}
