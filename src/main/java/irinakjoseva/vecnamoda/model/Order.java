package irinakjoseva.vecnamoda.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Order")
public class Order {
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
    private User userId;

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address addressId;


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
