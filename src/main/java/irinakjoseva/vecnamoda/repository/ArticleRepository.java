package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> { }
