package irinakjoseva.vecnamoda.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "purchase")
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @Column(name = "date_ordered")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime dateOrdered;

    @Column(name = "date_fulfilled")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime dateFulfilled;

    @Column(name = "date_refunded")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime dateRefunded;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;

    @OneToMany(mappedBy = "purchase", cascade = CascadeType.ALL, orphanRemoval = false)
    private List<Article> articles;

    public Purchase(User user, List<Article> articles, Address address) {
        this.user = user;
        this.articles = articles;
        this.status = Status.PENDING;
        this.dateOrdered = LocalDateTime.now();
        this.address = address;
    }

    public Purchase() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public LocalDateTime getDateOrdered() {
        return dateOrdered;
    }

    public void setDateOrdered(LocalDateTime dateOrdered) {
        this.dateOrdered = dateOrdered;
    }

    public LocalDateTime getDateFulfilled() {
        return dateFulfilled;
    }

    public void setDateFulfilled(LocalDateTime dateFulfilled) {
        this.dateFulfilled = dateFulfilled;
    }

    public LocalDateTime getDateRefunded() {
        return dateRefunded;
    }

    public void setDateRefunded(LocalDateTime dateRefunded) {
        this.dateRefunded = dateRefunded;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public List<Article> getArticles() { return articles; }


    public void addArticle(Article article) {
        articles.add(article);
        article.setPurchase(this);
    }

    public void removeArticle(Article article) {
        articles.remove(article);
        article.setPurchase(null);
    }


    public enum Status {
        PENDING("PENDING"),
        FULFILLED("FULFILLED"),
        CANCELLED("CANCELLED"),
        PENDING_REFUND("PENDING_REFUND"),
        REFUNDED("REFUNDED");

        String status;

        Status(String status) {
            this.status = status;
        }
    }
}
