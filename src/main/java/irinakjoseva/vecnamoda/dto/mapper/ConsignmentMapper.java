package irinakjoseva.vecnamoda.dto.mapper;

import irinakjoseva.vecnamoda.dto.get.ConsignmentGetDto;
import irinakjoseva.vecnamoda.model.Consignment;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ConsignmentMapper {

    ConsignmentMapper mapper = Mappers.getMapper(ConsignmentMapper.class);

    ConsignmentGetDto toGetDto(Consignment consignment);

    Consignment getDtoToModel(ConsignmentGetDto dto);

    List<ConsignmentGetDto> toGetDtos(List<Consignment> consignments);

}