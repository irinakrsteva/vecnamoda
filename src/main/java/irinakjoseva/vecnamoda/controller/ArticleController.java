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
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
                                                                         @RequestParam(required = false) List<String> conditions,
                                                                         @RequestParam(required = false) List<Integer> categoryIds,
                                                                         @RequestParam(required = false) List<Integer> sizeIds,
                                                                         @RequestParam(required = false) List<Integer> colorIds) {
//        Article.Condition articleCondition = Article.Condition.getCondition(condition);
        List<Article.Condition> articleConditions = (conditions == null)
                ? new ArrayList<>()
                : conditions.stream()
                .map(Article.Condition::getCondition)
                .collect(Collectors.toList());

        return ResponseEntity.ok(this.articleService.searchAvailableArticles(pageable, searchString,
                startPrice, endPrice, articleConditions, categoryIds, sizeIds, colorIds));
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
