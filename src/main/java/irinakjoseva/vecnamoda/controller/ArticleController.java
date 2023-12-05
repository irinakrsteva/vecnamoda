package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.service.ArticleService;
import irinakjoseva.vecnamoda.service.exceptions.ArticleAlreadySoldException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping("/available")
    public ResponseEntity<Page<ArticleResponseDto>> getAvailableArticles(
        @PageableDefault(size = 12) Pageable pageable,
        @RequestParam(required = false) String searchString,
        @RequestParam(required = false) Double startPrice,
        @RequestParam(required = false) Double endPrice,
        @RequestParam(required = false) List<String> conditions,
        @RequestParam(required = false) List<Integer> categoryIds,
        @RequestParam(required = false) List<Integer> sizeIds,
        @RequestParam(required = false) List<Integer> colorIds
    ) {
        List<Article.Condition> articleConditions = (conditions == null)
                ? new ArrayList<>()
                : conditions.stream()
                .map(Article.Condition::getCondition)
                .collect(Collectors.toList());

        return ResponseEntity.ok(this.articleService.getAvailableArticles(pageable, searchString,
                startPrice, endPrice, articleConditions, categoryIds, sizeIds, colorIds));
    }

    @PostMapping("/add")
    @PreAuthorize("hasAuthority('EMPLOYEE')")
    public ResponseEntity<ArticleResponseDto> save(@RequestBody @Valid ArticleRequestDto articleRequestDto) throws IOException {
        return ResponseEntity.ok(this.articleService.saveArticle(articleRequestDto));
    }

//    @PutMapping("/batch-sell")
//    @PreAuthorize("hasAuthority('CUSTOMER')")
//    public ResponseEntity<List<ArticleResponseDto>> changeStatusesToSold(@RequestBody List<Long> ids) throws ArticleAlreadySoldException {
//        return ResponseEntity.ok(this.articleService.changeStatusesToSold(ids));
//    }

//    @GetMapping("/available/currentuser")
//    public ResponseEntity<Page<ArticleResponseDto>> getArticlesForSaleByUser(Authentication authentication,
//                                                                            @PageableDefault(size=3) Pageable pageable) {
//        User user = ((HashMap<String, User>) authentication.getDetails()).get("user");
//        return ResponseEntity.ok(this.articleService.searchArticlesForSaleByUser(pageable, user.getId()));
//    }

}
