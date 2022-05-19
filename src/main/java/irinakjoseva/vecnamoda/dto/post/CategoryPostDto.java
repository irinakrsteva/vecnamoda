package irinakjoseva.vecnamoda.dto.post;


import javax.validation.constraints.NotBlank;

public class CategoryPostDto {

    @NotBlank
    public String name;

    // ? Long or Category
    public Long parentCategory;

    public Long sizeGroup;

}
