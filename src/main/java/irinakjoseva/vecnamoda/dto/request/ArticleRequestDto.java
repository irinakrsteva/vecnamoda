package irinakjoseva.vecnamoda.dto.request;

import irinakjoseva.vecnamoda.model.Article;

import javax.validation.constraints.NotNull;
import java.util.List;

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

    @NotNull
    public Long consignmentId;

    public List<Long> imageIds;

}

// @TODO: backend validation for posting article