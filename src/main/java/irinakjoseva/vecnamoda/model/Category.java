package irinakjoseva.vecnamoda.model;

import javax.persistence.*;
import java.util.List;

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
    private Category parentCategory;

    @OneToMany(mappedBy = "parentCategory", cascade = CascadeType.ALL)
    private List<Category> childrenCategories;

    public Category() {}

    public Category(String name) {
        this.name = name;
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
