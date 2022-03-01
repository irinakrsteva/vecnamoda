package irinakjoseva.vecnamoda.model;

import javax.persistence.*;

@Entity
@Table (name = "category")
public class Category {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "id")
    private Long id;

    @Column (name = "name")
    private String name;

    @ManyToOne
    @JoinColumn (name = "parent_category_id")
    private Category parentCategoryId;

}
