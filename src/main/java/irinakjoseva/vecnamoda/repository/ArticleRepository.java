package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.service.CategoryService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
            "and (coalesce (:categoryIds, 'failed') = 'failed' or articles.category.id in :categoryIds) " +
            "and (coalesce (:articleConditions, 'failed') = 'failed' or articles.articleCondition in :articleConditions) " +
            "and (coalesce (:sizeIds, 'failed') = 'failed' or articles.size.id in :sizeIds) " +
            "and (coalesce (:colorIds, 'failed') = 'failed' or articles.color.id in :colorIds)")
    Page<Article> findArticlesPageable(Article.Status status,
                                       Pageable pageable,
                                       @Param("searchString") String searchString,
                                       @Param("startPrice") Double startPrice,
                                       @Param("endPrice") Double endPrice,
                                       @Param("articleConditions") List<Article.Condition> articleConditions,
                                       @Param("categoryIds") List<Integer> categoryIds,
                                       @Param("sizeIds") List<Integer> sizeIds,
                                       @Param("colorIds") List<Integer> colorIds
    );

    Article getById(Long id);

    List<Article> findAllById(Iterable<Long> ids);


    //TODO UNFINISHED
    @Query("select articles from Article articles " +
            "where (:status is null or articles.status = :status) " +
            "and articles.purchase.user.id = :userId")
    Page<Article> findArticlesByPurchasePageable(Article.Status status,
                                        Pageable pageable,
                                        @Param("userId") Long userId);
}
