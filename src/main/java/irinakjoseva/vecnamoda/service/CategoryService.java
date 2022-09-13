package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.response.CategoryResponseDto;
import irinakjoseva.vecnamoda.model.Category;

import java.util.List;

public interface CategoryService {

    CategoryResponseDto getById(Integer id);

    List<CategoryResponseDto> getAll();

}
