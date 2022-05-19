package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.model.Category;
import irinakjoseva.vecnamoda.repository.CategoryRepository;
import irinakjoseva.vecnamoda.service.CategoryService;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category findById(Long id) {
        return categoryRepository.findOneById(id);
    }
}
