package irinakjoseva.vecnamoda.controller.dto;

import irinakjoseva.vecnamoda.model.Article;

import javax.validation.constraints.NotBlank;

public class ArticleDto {

    @NotBlank
    public float price;

    @NotBlank
    public Article.Condition condition;

    @NotBlank
    public Article.Status status;

    public String description;

    public Long categoryId;

    public Long sizeId;

    public Long colorId;

    public Long brandId;

    public Long orderId;

    public Long consignmentId;

    public Long paymentId;

}
