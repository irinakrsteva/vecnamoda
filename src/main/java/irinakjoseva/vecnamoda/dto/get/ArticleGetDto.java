package irinakjoseva.vecnamoda.dto.get;

import irinakjoseva.vecnamoda.model.Article;

public class ArticleGetDto {

    public Long id;
    
    public float price;

    public Article.Condition articleCondition;

    public Article.Status status;

    public String description;

    public Long categoryId;

    public Long sizeId;

    public Long colorId;

    public Long brandId;

    public Long purchaseId;

    public Long consignmentId;

    public Long paymentId;

}
