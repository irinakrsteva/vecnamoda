package irinakjoseva.vecnamoda.dto.post;

import javax.validation.constraints.NotNull;

public class ColorPostDto {

    @NotNull
    public String name;

    public String hexValue;

}
