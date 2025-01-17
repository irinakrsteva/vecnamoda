package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.ArticleImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleImageRepository extends JpaRepository<ArticleImage, Long> {
}
