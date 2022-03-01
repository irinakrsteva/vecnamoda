package irinakjoseva.vecnamoda.model;

import javax.persistence.*;

@Entity
@Table(name = "article_image")
public class ArticleImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "path")
    private String path;

    @ManyToOne
    @JoinColumn(name = "article_id")
    private Article articleId;
}
