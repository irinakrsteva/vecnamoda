package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.controller.dto.ArticleDto;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.service.impl.ArticleServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    @Autowired
    private final ArticleServiceImpl articleService;

    public ArticleController(ArticleServiceImpl articleService) {
        this.articleService = articleService;
    }

    // Maybe make pageable from service?
    @GetMapping("/public")
    public List<Article> getArticles() {
        return this.articleService.getAllAvailableArticles();
    }

    @PostMapping
    public void saveArticle(@Valid ArticleDto articleDto, Authentication authentication) throws IOException {
        this.articleService.saveArticle(articleDto, ((HashMap<String, User>) authentication.getDetails()).get("account"));
    }


}
