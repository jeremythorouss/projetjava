package io.takima.demo.models;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "Name")
    private String Name;
    @Column(name = "Email")
    private String Email;
    @Column(name = "Birthdate")
    private Date Birthdate;

    public User() {
    }
    public User(Long id, String Name, String Email, Date Birthdate) {
        this.id = id;
        this.Name = Name;
        this.Email = Email;
        this.Birthdate = Birthdate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public Date getBirthdate() {
        return Birthdate;
    }

    public void setBirthdate(Date birthdate) {
        Birthdate = birthdate;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(Name, user.Name) && Objects.equals(Email, user.Email) && Objects.equals(Birthdate, user.Birthdate);
    }
    @Override
    public int hashCode() {
        return Objects.hash(id, Name, Email, Birthdate);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", Name='" + Name + '\'' +
                ", Email='" + Email + '\'' +
                ", Birthdate=" + Birthdate +
                '}';
    }



}
