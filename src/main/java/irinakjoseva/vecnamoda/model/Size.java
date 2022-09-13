package irinakjoseva.vecnamoda.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "size")
public class Size {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "standard")
    private String standard;

    @Column(name = "value")
    private String value;


    @OneToMany(mappedBy = "size", cascade = CascadeType.ALL, orphanRemoval = false)
    private List<Article> articles;

    public Size() {}

    public Size(String standard, String value) {
        this.standard = standard;
        this.value = value;
    }


    public String getStandardAndValue() {
        return standard.concat(value);
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStandard() {
        return standard;
    }

    public void setStandard(String standard) {
        this.standard = standard;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }


    public void addArticle(Article article) {
        articles.add(article);
        article.setSize(this);
    }

    public void removeArticle(Article article) {
        articles.remove(article);
        article.setSize(null);
    }

}
