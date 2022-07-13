package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.get.ArticleGetDto;
import irinakjoseva.vecnamoda.dto.post.ArticlePostDto;
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
    public ResponseEntity<List<ArticleGetDto>> getArticles() {
        return ResponseEntity.ok(this.articleService.getAllAvailableArticles());
    }

    @PostMapping("/add")
//    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('ADMIN')")
    public ResponseEntity<ArticleGetDto> save (@RequestBody @Valid ArticlePostDto articlePostDto) throws IOException {
        return ResponseEntity.ok(this.articleService.saveArticle(articlePostDto));
    }


}
