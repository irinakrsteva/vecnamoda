package irinakjoseva.vecnamoda.model;

import javax.persistence.*;

@Entity
@Table(name = "blob")
public class Blob {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @Column(name = "data")
    private Byte[] data;

    public Blob(Byte[] bytes) {
        // ?
        this.data = bytes;
    }

    public Blob() {
    }

    public void setId(String id) {
        this.id = id;
    }

    @Id
    public String getId() {
        return id;
    }

    public Byte[] getData() {
        return data;
    }

    public void setData(Byte[] data) {
        this.data = data;
    }
}
