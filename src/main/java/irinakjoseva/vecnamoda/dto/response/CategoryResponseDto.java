package irinakjoseva.vecnamoda.dto.response;

import java.util.List;

public class CategoryResponseDto {

    public Integer id;

    public String name;

//    public Integer parentCategoryId;

    public List<CategoryResponseDto> childrenCategories;

}
