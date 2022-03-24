package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long> {

    List<Article> findAllByStatusEquals(Article.Status status);



}
