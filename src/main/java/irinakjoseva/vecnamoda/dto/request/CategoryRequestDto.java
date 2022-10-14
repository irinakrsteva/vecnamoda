package irinakjoseva.vecnamoda.dto.request;


import javax.validation.constraints.NotBlank;

public class CategoryRequestDto {

    @NotBlank
    public String name;

    // ? Long or Category
    public Integer parentCategory;

//    public Long sizeGroup;

}
