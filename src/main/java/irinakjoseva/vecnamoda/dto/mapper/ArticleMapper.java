package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.model.ArticleImage;
import irinakjoseva.vecnamoda.service.CategoryService;
import irinakjoseva.vecnamoda.service.ColorService;
import irinakjoseva.vecnamoda.service.ConsignmentService;
import irinakjoseva.vecnamoda.service.SizeService;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring", uses = {
        ConsignmentService.class,
        ColorService.class,
        CategoryService.class,
        SizeService.class
})

public interface ArticleMapper {

    ArticleMapper mapper = Mappers.getMapper(ArticleMapper.class);

    @Mappings({
            @Mapping(source = "consignment.id", target = "consignmentId"),
//            @Mapping(source = "imageIds", target = "imageIds", qualifiedByName = "articleImagesToImageIds")
    })
    ArticleResponseDto toResponseDto(Article article);

    @Mapping(source = "consignment.id", target = "consignmentId")
    List<ArticleResponseDto> toResponseDtos(List<Article> articles);

    @Mapping(source = "consignmentId", target = "consignment")
    Article requestDtoToModel(ArticleRequestDto articlePostDto);

}
