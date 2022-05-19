package irinakjoseva.vecnamoda.dto.post;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class UserPostDto {
    public String name;

    @NotBlank
    public String username;

    @NotBlank
    public String password;

    @NotBlank
    @Email
    public String email;
}
