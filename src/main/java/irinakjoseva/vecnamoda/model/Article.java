package irinakjoseva.vecnamoda.model;

import javax.persistence.*;

@Entity
@Table(name = "article")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "price")
    private float price;

    @Enumerated(EnumType.STRING)
    @Column(name = "condition")
    private Condition condition;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category categoryId;

    @ManyToOne
    @JoinColumn(name = "size_id")
    private Size sizeId;

    @ManyToOne
    @JoinColumn(name = "color_id")
    private Color colorId;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brandId;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order orderId;

    @ManyToOne
    @JoinColumn(name = "consignment_id")
    private Consignment consignmentId;

    @ManyToOne
    @JoinColumn(name = "payment_id")
    private Payment paymentId;

    public Article() {}

    public Article(Float price, Condition condition, Status status, String description,
                   Category categoryId, Size sizeId, Color colorId, Brand brandId,
                   Order orderId, Consignment consignmentId, Payment paymentId) {
        this.price = price;
        this.condition = condition;
        this.status = status;
        this.description = description;
    }



    public Long getId() {
        return id;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public Condition getCondition() {
        return condition;
    }

    public void setCondition(Condition condition) {
        this.condition = condition;
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

    public Category getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Category categoryId) {
        this.categoryId = categoryId;
    }

    public Size getSizeId() {
        return sizeId;
    }

    public void setSizeId(Size sizeId) {
        this.sizeId = sizeId;
    }

    public Color getColorId() {
        return colorId;
    }

    public void setColorId(Color colorId) {
        this.colorId = colorId;
    }

    public Brand getBrandId() {
        return brandId;
    }

    public void setBrandId(Brand brandId) {
        this.brandId = brandId;
    }

    public Order getOrderId() {
        return orderId;
    }

    public void setOrderId(Order orderId) {
        this.orderId = orderId;
    }

    public Consignment getConsignmentId() {
        return consignmentId;
    }

    public void setConsignmentId(Consignment consignmentId) {
        this.consignmentId = consignmentId;
    }

    public Payment getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(Payment paymentId) {
        this.paymentId = paymentId;
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
    public enum Status {
        AVAILABLE("AVAILABLE"),
        SOLD("SOLD");

        String status;

        Status(String status) {
            this.status = status;
        }
    }


}
