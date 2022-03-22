package irinakjoseva.vecnamoda.service.dto;

import irinakjoseva.vecnamoda.model.Article;

import javax.validation.constraints.NotBlank;

public class ArticleDto {

    @NotBlank
    public float price;

    @NotBlank
    public Article.Condition condition;

    public String description;



}
