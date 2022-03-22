package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.service.impl.ArticleServiceImpl;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/article")
public class ArticleController {

    private final ArticleServiceImpl service;

    public ArticleController(ArticleServiceImpl service) {
        this.service = service;
    }

}
