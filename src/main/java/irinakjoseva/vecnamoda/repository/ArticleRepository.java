package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.model.Category;
import irinakjoseva.vecnamoda.model.Color;
import irinakjoseva.vecnamoda.model.Size;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends PagingAndSortingRepository<Article, Long> {


    @Query("select articles from Article articles " +
            "where (:status is null or articles.status = :status) " +
            "and (:searchString is null or articles.description like concat('%', :searchString, '%')) " +
            "and (:startPrice is null or :endPrice is null or (articles.price between :startPrice and :endPrice)) " +
            "and (:articleCondition is null or articles.articleCondition = :articleCondition) " +
            "and (:categoryId is null or articles.category.id = :categoryId) " +
            "and (:sizeId is null or articles.size.id = :sizeId) " +
            "and (:colorId is null or articles.color.id = :colorId)")
    Page<Article> findArticlesPageable(Article.Status status,
                                       Pageable pageable,
                                       @Param("searchString") String searchString,
                                       @Param("startPrice") Double startPrice,
                                       @Param("endPrice") Double endPrice,
                                       @Param("articleCondition") Article.Condition articleCondition,
                                       @Param("categoryId") Integer categoryId,
                                       @Param("sizeId") Integer sizeId,
                                       @Param("colorId") Integer colorId
    );


}
