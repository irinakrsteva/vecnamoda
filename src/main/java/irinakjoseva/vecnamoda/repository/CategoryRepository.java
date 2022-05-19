package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {

    Category findOneById(Long id);

}
