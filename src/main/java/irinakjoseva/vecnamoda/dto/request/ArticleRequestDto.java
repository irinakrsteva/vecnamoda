package irinakjoseva.vecnamoda.dto.request;

import irinakjoseva.vecnamoda.model.Article;

import javax.validation.constraints.NotNull;
import java.util.List;

public class ArticleRequestDto {

    @NotNull
    public Float price;

    public Article.Condition articleCondition;

    @NotNull
    public Article.Status status;

    public String description;

    public Integer categoryId;

    public Integer colorId;

    public Integer sizeId;

//    public Integer brandId;

    public List<Long> imageIds;

    @NotNull
    public Long consignmentId;

}

// @TODO: backend validation for posting article