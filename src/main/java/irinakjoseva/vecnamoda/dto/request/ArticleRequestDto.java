package irinakjoseva.vecnamoda.dto.request;

import irinakjoseva.vecnamoda.model.Article;

import javax.validation.constraints.NotNull;

public class ArticleRequestDto {

    @NotNull
    public Float price;

    @NotNull
    public Article.Condition articleCondition;

    @NotNull
    public Article.Status status;

    public String description;

    public Long categoryId;

    public Long sizeId;

    public Long colorId;

    public Long brandId;

    public Long consignmentId;

}

// @TODO: backend validation for posting article