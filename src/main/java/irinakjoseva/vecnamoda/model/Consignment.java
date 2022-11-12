package irinakjoseva.vecnamoda.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "consignment")
public class Consignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "token")
    private String token;

    @Column(name = "date_received")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime dateReceived;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    @OneToMany(mappedBy = "consignment", cascade = CascadeType.ALL)
    private List<Article> articles;


    public Consignment() {
    }

    public Consignment(User user, String token) {
        this.user = user;
        this.articles = new ArrayList<>();
        this.token = token;
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

    public List<Article> getArticles() {
        return this.articles;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

//    @Override
//    public String toString() {
//        return "Consignment id: [" + this.getId() + "], made by user: [" + this.getUser().getUsername() + "]";
//    }

}
