package irinakjoseva.vecnamoda.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "payment")
public class Payment {

    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "amount")
    private int balance;

    @Column(name = "date")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    @OneToMany(mappedBy = "payment", cascade = CascadeType.ALL, orphanRemoval = false)
    private List<Article> articles;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    public void addArticle(Article article) {
        articles.add(article);
        article.setPayment(this);
    }

    public void removeArticle(Article article) {
        articles.remove(article);
        article.setPayment(null);
    }

}
