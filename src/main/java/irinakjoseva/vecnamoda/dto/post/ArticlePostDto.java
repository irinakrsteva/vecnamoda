package irinakjoseva.vecnamoda.dto.post;

import irinakjoseva.vecnamoda.model.Article;

import javax.validation.constraints.NotNull;

public class ArticlePostDto {

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
