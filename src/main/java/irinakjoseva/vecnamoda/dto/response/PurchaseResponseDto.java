package irinakjoseva.vecnamoda.dto.response;

import java.time.LocalDateTime;
import java.util.List;

public class PurchaseResponseDto {

    public Long id;

    public List<ArticleResponseDto> articles;

    public LocalDateTime dateOrdered;

    public UserResponseDto user;

}
