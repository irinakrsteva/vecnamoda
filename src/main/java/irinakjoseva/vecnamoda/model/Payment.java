package irinakjoseva.vecnamoda.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

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
    private User userId;

}
