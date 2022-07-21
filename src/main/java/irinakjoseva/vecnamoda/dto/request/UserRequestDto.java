package irinakjoseva.vecnamoda.dto.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class UserRequestDto {
    public String name;

    @NotBlank
    public String username;

    @NotBlank
    public String password;

    @NotBlank
    @Email
    public String email;
}
