package irinakjoseva.vecnamoda.model;

import javax.persistence.*;

@Entity
@Table(name = "size_group") // kid's, women's eu, women's us, men's eu, men's us, kid's shoes, women's shoes eu...
public class SizeGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
