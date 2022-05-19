package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.mapper.ArticleMapper;
import irinakjoseva.vecnamoda.dto.post.ArticlePostDto;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.service.impl.ArticleServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    private final ArticleServiceImpl articleService;

    private final ArticleMapper articleMapper;

    public ArticleController(ArticleServiceImpl articleService, ArticleMapper articleMapper) {
        this.articleService = articleService;
        this.articleMapper = articleMapper;
    }

    // TODO Make pageable from service?
    @GetMapping("/public")
    public List<Article> getArticles() {
        return this.articleService.getAllAvailableArticles();
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('EMPLOYEE') || hasRole('ADMIN')")
    public void saveArticle(@RequestBody @Valid ArticlePostDto articlePostDto, Authentication authentication) throws IOException {
        this.articleService.saveArticle(articlePostDto, ((HashMap<String, User>) authentication.getDetails()).get("account"));
    }


}
