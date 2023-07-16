package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.response.SizeResponseDto;
import irinakjoseva.vecnamoda.model.Category;
import irinakjoseva.vecnamoda.model.Size;
import org.springframework.stereotype.Service;

import java.util.List;


public interface SizeService {

    List<SizeResponseDto> getAll();

    SizeResponseDto getById(Integer id);

    Size map(Integer id);

}
