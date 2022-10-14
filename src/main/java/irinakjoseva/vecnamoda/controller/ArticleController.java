package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.service.impl.ArticleServiceImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;
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
    public ResponseEntity<Page<ArticleResponseDto>> getAvailableArticles(@PageableDefault(size = 12) Pageable pageable,
                                                                         @RequestParam(required = false) String searchString,
                                                                         @RequestParam(required = false) Double startPrice,
                                                                         @RequestParam(required = false) Double endPrice,
                                                                         @RequestParam(required = false) String condition,
                                                                         @RequestParam(required = false) Integer categoryId,
                                                                         @RequestParam(required = false) Integer sizeId,
                                                                         @RequestParam(required = false) Integer colorId) {
        Article.Condition articleCondition = Article.Condition.getCondition(condition);
        return ResponseEntity.ok(this.articleService.searchAvailableArticles(pageable, searchString, startPrice, endPrice, articleCondition, categoryId, sizeId, colorId));
    }

    @PostMapping("/add")
//    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('ADMIN')")
    public ResponseEntity<ArticleResponseDto> save(@RequestBody @Valid ArticleRequestDto articleRequestDto) throws IOException {
        return ResponseEntity.ok(this.articleService.saveArticle(articleRequestDto));
    }
//
//    @PutMapping("/sell/{id}")
//    public ResponseEntity<ArticleResponseDto> changeStatusToSold(@PathVariable("id") Long id) {
//        return ResponseEntity.ok(this.articleService.changeStatus(id, Article.Status.SOLD));
//    }

    @PutMapping("/batch-sell")
    public ResponseEntity<List<ArticleResponseDto>> changeStatusesToSold(@RequestBody List<Long> ids) {
        return ResponseEntity.ok(this.articleService.changeStatuses(ids, Article.Status.SOLD));
    }

}
