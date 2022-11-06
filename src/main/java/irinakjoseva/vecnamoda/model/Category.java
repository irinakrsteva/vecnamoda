package irinakjoseva.vecnamoda.model;

import irinakjoseva.vecnamoda.dto.response.CategoryResponseDto;
import org.mapstruct.Named;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Entity
@Table (name = "category")
public class Category {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "id")
    private Integer id;

    @Column (name = "name")
    private String name;

    @ManyToOne
    @JoinColumn (name = "parent_category_id")
//    @Column(name="parent_category_id")
    private Category parentCategory;

    @OneToMany(mappedBy = "parentCategory", cascade = CascadeType.ALL)
    private List<Category> childrenCategories;


    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Article> articles;

    public Category() {
    }

    public Category(String name) {
        this.name = name;
//        this.parentCategory = parentCategory;
//        this.childrenCategories = new ArrayList<>();
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getParentCategory() {
        return parentCategory;
    }

    public void setParentCategory(Category parentCategory) {
        this.parentCategory = parentCategory;
    }


    public void addArticle(Article article) {
        articles.add(article);
        article.setCategory(this);
    }

    public void removeArticle(Article article) {
        articles.remove(article);
        article.setCategory(null);
    }

    public List<Category> getChildrenCategories() {
        return childrenCategories;
    }

//    public List<Category> getRecursiveCategories() {
//        List<Category> recursiveCategories = new ArrayList<>();
//        recursiveCategories.add(this);
//
//        childrenCategories.forEach(category -> {
//            recursiveCategories.addAll(category.getRecursiveCategories());
//        });
//
//        return recursiveCategories;
//    }
//
//    public void setChildrenCategories(List<Category> childrenCategories) {
//        this.childrenCategories = childrenCategories;
//    }
}
