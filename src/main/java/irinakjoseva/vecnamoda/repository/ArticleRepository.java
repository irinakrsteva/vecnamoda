package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.Article;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {

    List<Article> findAllByStatusEquals(Article.Status status);

    List<Article> findTop100ByStatusEquals(Article.Status status);

    Page<Article> findArticlesPageableByStatusEquals(Pageable pageable, Article.Status status);

}
