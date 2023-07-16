package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.response.CategoryResponseDto;
import irinakjoseva.vecnamoda.model.Category;
import irinakjoseva.vecnamoda.model.Color;
import irinakjoseva.vecnamoda.service.exceptions.NotFound404Exception;
import javassist.NotFoundException;

import java.util.List;

public interface CategoryService {

    CategoryResponseDto getById(Integer id) throws NotFound404Exception;

    List<CategoryResponseDto> getAll();

    Category map(Integer id);

}
