package io.takima.demo.models;


import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "reservesalles")
public class ReserveSalle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "startdate")
    private Date startdate;
    @Column(name = "endate")
    private Date endate;
    @Column(name = "name")
    private String name;

    public ReserveSalle() {
    }

    public ReserveSalle(Long id, Date startdate, Date endate, String name) {
        this.id = id;
        this.startdate = startdate;
        this.endate = endate;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getStartdate() {
        return startdate;
    }

    public void setStartdate(Date startdate) {
        this.startdate = startdate;
    }

    public Date getEndate() {
        return endate;
    }

    public void setEndate(Date endate) {
        this.endate = endate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ReserveSalle)) return false;
        ReserveSalle that = (ReserveSalle) o;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getStartdate(), that.getStartdate()) && Objects.equals(getEndate(), that.getEndate()) && Objects.equals(getName(), that.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getStartdate(), getEndate(), getName());
    }

    @Override
    public String toString() {
        return "ReserveSalle{" +
                "id=" + id +
                ", startdate=" + startdate +
                ", endate=" + endate +
                ", name='" + name + '\'' +
                '}';
    }
}
