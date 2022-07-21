package irinakjoseva.vecnamoda.dto.request;

import javax.validation.constraints.NotNull;

public class ColorRequestDto {

    @NotNull
    public String name;

    public String hexValue;

}
