package irinakjoseva.vecnamoda.model;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "consignment")
public class Consignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "date_received")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime dateReceived;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    @OneToMany(mappedBy = "consignment", cascade = CascadeType.ALL, orphanRemoval = false)
    private List<Article> articles;


    public Consignment() {}

    public Consignment(User user, List<Article> articles) {
        this.dateReceived = LocalDateTime.now();
        this.user = user;
        this.articles = articles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDateReceived() {
        return dateReceived;
    }

    public void setDateReceived(LocalDateTime dateReceived) {
        this.dateReceived = dateReceived;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    public void addArticle(Article article) {
        articles.add(article);
        article.setConsignment(this);
    }

    public void removeArticle(Article article) {
        articles.remove(article);
        article.setConsignment(null);
    }


}
