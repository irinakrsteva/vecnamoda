package irinakjoseva.vecnamoda.model;

import javax.persistence.*;

@Entity
@Table(name = "size_group")
public class SizeGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

}
