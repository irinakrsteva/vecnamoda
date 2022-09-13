package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.response.SizeResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;


public interface SizeService {

    List<SizeResponseDto> getSizes();

    SizeResponseDto getSize(Integer id);

}
