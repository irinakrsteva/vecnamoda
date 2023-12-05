package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.response.ConsignmentResponseDto;
import irinakjoseva.vecnamoda.model.Consignment;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ConsignmentMapper {

    ConsignmentMapper mapper = Mappers.getMapper(ConsignmentMapper.class);

    ConsignmentResponseDto toResponseDto(Consignment consignment);

    List<ConsignmentResponseDto> toResponseDtos(List<Consignment> consignments);

}
