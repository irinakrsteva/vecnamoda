package irinakjoseva.vecnamoda.model;

import javax.persistence.*;

@Entity
@Table(name = "article_image")
public class ArticleImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "article_id")
    private Article article;

    @OneToOne
    @JoinColumn(name = "image_id")
    private Image image;

    public ArticleImage() {
    }

    public ArticleImage(Article article, Image image) {
        this.article = article;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }

    public Image getImage() { return image; }

    public void setImage(Image image) { this.image = image; }
}
