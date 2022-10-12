package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.Article;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends PagingAndSortingRepository<Article, Long> {

    Page<Article> findAllByStatusEquals(Article.Status status, Pageable pageable);


}
