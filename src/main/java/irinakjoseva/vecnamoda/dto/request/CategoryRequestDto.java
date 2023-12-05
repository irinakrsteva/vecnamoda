package irinakjoseva.vecnamoda.dto.request;


import javax.validation.constraints.NotBlank;

public class CategoryRequestDto {

    @NotBlank
    public String name;

}
