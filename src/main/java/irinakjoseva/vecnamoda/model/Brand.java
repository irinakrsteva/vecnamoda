package irinakjoseva.vecnamoda.model;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "brand")
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;


    @OneToMany(mappedBy = "brand", cascade = CascadeType.ALL, orphanRemoval = false)
    private List<Article> articles;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public void addArticle(Article article) {
        articles.add(article);
        article.setBrand(this);
    }

    public void removeArticle(Article article) {
        articles.remove(article);
        article.setBrand(null);
    }

}
