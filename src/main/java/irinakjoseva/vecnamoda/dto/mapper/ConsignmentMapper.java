package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.response.ConsignmentResponseDto;
import irinakjoseva.vecnamoda.model.Consignment;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ConsignmentMapper {

    ConsignmentMapper mapper = Mappers.getMapper(ConsignmentMapper.class);

    ConsignmentResponseDto toGetDto(Consignment consignment);

    Consignment getDtoToModel(ConsignmentResponseDto dto);

    List<ConsignmentResponseDto> toGetDtos(List<Consignment> consignments);

}
