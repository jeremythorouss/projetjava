package io.takima.demo.models;


import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "reservesalles")
public class ReserveSalle {
    @Override
    public String toString() {
        return "ReserveSalle{" +
                "id=" + id +
                ", startdate=" + startdate +
                ", endate=" + endate +
                ", name='" + name + '\'' +
                ", namesalle='" + namesalle + '\'' +
                ", time='" + time + '\'' +
                '}';
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ReserveSalle)) return false;
        ReserveSalle that = (ReserveSalle) o;
        return Objects.equals(id, that.id)
                && Objects.equals(startdate, that.startdate)
                && Objects.equals(endate, that.endate)
                && Objects.equals(name, that.name)
                && Objects.equals(namesalle, that.namesalle)
                && Objects.equals(time, that.time)
                ;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, startdate, endate, name, namesalle,time);
    }

    @Column(name = "startdate")
    private Date startdate;
    @Column(name = "endate")
    private Date endate;
    @Column(name = "name")
    private String name;
    @Column(name = "namesalle")
    private String namesalle;

    @Column(name = "time")
    private Date time;

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getNamesalle() {
        return namesalle;
    }

    public void setNamesalle(String namesalle) {
        this.namesalle = namesalle;
    }


    public ReserveSalle() {
    }

    public ReserveSalle(Long id, Date startdate, Date endate, String name, String namesalle, Date time) {
        this.id = id;
        this.startdate = startdate;
        this.endate = endate;
        this.name = name;
        this.namesalle=namesalle;
        this.time = time;
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

}
