package irinakjoseva.vecnamoda.service.dto;


import javax.validation.constraints.NotBlank;

public class CategoryDto {

    @NotBlank
    public String name;

    // ? Long or Category
    public Long parentCategory;

    public Long sizeGroup;

}
