package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.service.impl.ArticleServiceImpl;
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
    @GetMapping("/public")
    public ResponseEntity<List<ArticleResponseDto>> getArticles() {
        return ResponseEntity.ok(this.articleService.getAllAvailableArticles());
    }

    @PostMapping("/add")
//    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('ADMIN')")
    public ResponseEntity<ArticleResponseDto> save (@RequestBody @Valid ArticleRequestDto articleRequestDto) throws IOException {
        return ResponseEntity.ok(this.articleService.saveArticle(articleRequestDto));
    }


}
