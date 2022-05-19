package irinakjoseva.vecnamoda.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "color")
public class Color {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "hex_value")
    private String hexValue;


    @OneToMany(mappedBy = "color", cascade = CascadeType.ALL, orphanRemoval = false)
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

    public String getHexValue() {
        return hexValue;
    }

    public void setHexValue(String hexValue) {
        this.hexValue = hexValue;
    }


    public void addArticle(Article article) {
        articles.add(article);
        article.setColor(this);
    }

    public void removeArticle(Article article) {
        articles.remove(article);
        article.setColor(null);
    }

}
