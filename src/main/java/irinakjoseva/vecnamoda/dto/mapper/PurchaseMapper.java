package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.response.PurchaseResponseDto;
import irinakjoseva.vecnamoda.model.Purchase;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PurchaseMapper {

    PurchaseMapper mapper = Mappers.getMapper(PurchaseMapper.class);

    PurchaseResponseDto toResponseDto(Purchase purchase);

}
