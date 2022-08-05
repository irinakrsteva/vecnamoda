package irinakjoseva.vecnamoda.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "article")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "price")
    private Double price;

    @Enumerated(EnumType.STRING)
    @Column(name = "article_condition")
    private Condition articleCondition;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "size_id")
    private Size size;

    @ManyToOne
    @JoinColumn(name = "color_id")
    private Color color;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    @ManyToOne
    @JoinColumn(name = "purchase_id")
    private Purchase purchase;

    @ManyToOne
    @JoinColumn(name = "consignment_id")
    private Consignment consignment;

    @ManyToOne
    @JoinColumn(name = "payment_id")
    private Payment payment;


    @OneToMany(mappedBy = "article", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ArticleImage> articleImages;


    public Article() { }

    public Article(Double price, Condition articleCondition, Status status, String description,
                   Category category, Size size, Color color, Brand brand, Consignment consignment) {

        this.price = price;
        this.articleCondition = articleCondition;
        this.status = status;
        this.description = description;
        this.category = category;
        this.size = size;
        this.color = color;
        this.brand = brand;
        this.consignment = consignment;

        this.purchase = null;

    }


    public Long getId() {
        return id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Condition getArticleCondition() {
        return articleCondition;
    }

    public void setArticleCondition(Condition condition) {
        this.articleCondition = condition;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Size getSize() {
        return size;
    }

    public void setSize(Size size) {
        this.size = size;
    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public Purchase getPurchase() {
        return purchase;
    }

    public void setPurchase(Purchase purchase) {
        this.purchase = purchase;
    }

    public Consignment getConsignment() {
        return consignment;
    }

    public void setConsignment(Consignment consignment) {
        this.consignment = consignment;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }


    public void addArticleImage(ArticleImage articleImage) {
        articleImages.add(articleImage);
        articleImage.setArticle(this);
    }

    public void removeArticleImage(ArticleImage articleImage) {
        articleImages.remove(articleImage);
        articleImage.setArticle(null);
    }


    public enum Condition {

        GOOD("GOOD"),
        GREAT("GREAT"),
        EXCELLENT("EXCELLENT");

        String condition;

        Condition(String condition) {
            this.condition = condition;
        }

    }

    public enum Status { // TODO: add status Draft article for when creating consignment

        AVAILABLE("AVAILABLE"),
        SOLD("SOLD");

        String status;

        Status(String status) {
            this.status = status;
        }
    }



}
