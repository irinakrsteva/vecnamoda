package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.dto.response.ConsignmentResponseDto;
import irinakjoseva.vecnamoda.service.impl.ArticleServiceImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
    @GetMapping
    public ResponseEntity<List<ArticleResponseDto>> getAvailableArticles() {
        return ResponseEntity.ok(this.articleService.getAllAvailableArticles());
    }

    @PostMapping("/add")
//    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('ADMIN')")
    public ResponseEntity<ArticleResponseDto> save(@RequestBody @Valid ArticleRequestDto articleRequestDto) throws IOException {
        return ResponseEntity.ok(this.articleService.saveArticle(articleRequestDto));
    }

//    @GetMapping("/available")
//    public ResponseEntity<List<ConsignmentResponseDto>> getAvailableArticles(Pageable pageable,
//                                                                             @RequestParam Integer pageNumber,
//                                                                             @RequestParam Integer pageSize
//    ) {
//        Page page = articleService.getAvailableArticles(pageable);
//    }
//
//
//    public Page<ArticleResponseDto> getAvailableArticles(@NotNull final Pageable pageable) {
//        return articleService.getAvailableArticles(pageable);
//    }

}
