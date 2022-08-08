package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.io.IOException;
import java.util.List;

public interface ArticleService {

    List<ArticleResponseDto> getAllAvailableArticles();

    ArticleResponseDto saveArticle(ArticleRequestDto articlePostDto) throws IOException;

//    Page<ArticleResponseDto> getAvailableArticles(PageRequest pageRequest);

}
