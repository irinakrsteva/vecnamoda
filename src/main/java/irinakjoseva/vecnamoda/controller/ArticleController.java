package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.dto.response.ConsignmentResponseDto;
import irinakjoseva.vecnamoda.service.impl.ArticleServiceImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    private final ArticleServiceImpl articleService;

    public ArticleController(ArticleServiceImpl articleService) {
        this.articleService = articleService;
    }

    // TODO Make pageable from service?
    @GetMapping("/available")
    public ResponseEntity<Page<ArticleResponseDto>> getAvailableArticles(@PageableDefault(size = 12) Pageable pageable) {
        return ResponseEntity.ok(this.articleService.getAllAvailableArticles(pageable));
    }

    @PostMapping("/add")
//    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('ADMIN')")
    public ResponseEntity<ArticleResponseDto> save(@RequestBody @Valid ArticleRequestDto articleRequestDto) throws IOException {
        return ResponseEntity.ok(this.articleService.saveArticle(articleRequestDto));
    }




}
