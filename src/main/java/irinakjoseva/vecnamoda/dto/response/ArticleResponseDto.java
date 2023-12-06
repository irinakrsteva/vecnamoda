package irinakjoseva.vecnamoda.dto.response;

import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.repository.SizeRepository;

import java.util.List;

public class ArticleResponseDto {

    public Long id;
    
    public float price;

    public Article.Condition articleCondition;

    public Article.Status status;

    public String description;

    public CategoryResponseDto category;

    public SizeResponseDto size;

    public ColorResponseDto color;

    public List<Long> imageIds;

}
