package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.mapper.CategoryMapper;
import irinakjoseva.vecnamoda.dto.response.CategoryResponseDto;
import irinakjoseva.vecnamoda.model.Category;
import irinakjoseva.vecnamoda.repository.CategoryRepository;
import irinakjoseva.vecnamoda.service.CategoryService;
import irinakjoseva.vecnamoda.service.exceptions.NotFound404Exception;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    public CategoryServiceImpl(CategoryRepository categoryRepository, CategoryMapper categoryMapper) {
        this.categoryRepository = categoryRepository;
        this.categoryMapper = categoryMapper;
    }

    @Override
    public CategoryResponseDto getById(Integer id) {
        Category category = categoryRepository
                .findById(id)
                .orElseThrow(() -> new NotFound404Exception("id: " + id));
        return categoryMapper.toResponseDto(category);
    }

    @Override
    public List<CategoryResponseDto> getAll() {
        List<Category> categories = categoryRepository.findAll();
        return categoryMapper.toResponseDtos(categories);
    }

    @Override
    public Category map(Integer id) {
        return categoryRepository
                .findById(id)
                .orElse(null);
    }
}
