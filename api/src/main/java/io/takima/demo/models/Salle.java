package io.takima.demo.models;

import java.lang.String;

import javax.persistence.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.Date;
import java.util.Objects;
import java.awt.Image;


@Entity
@Table(name = "salles")
public class Salle {
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public int getCapacite() {
        return capacite;
    }

    public void setCapacite(int capacite) {
        this.capacite = capacite;
    }

    public void setEquipement(String equipement) {
        this.equipement = equipement;
    }

    public Salle(Long id, String name, String photo, int capacite, String equipement) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.capacite = capacite;
        this.equipement = equipement;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Salle)) return false;
        Salle salle = (Salle) o;
        return capacite == salle.capacite && Objects.equals(id, salle.id) && Objects.equals(name, salle.name)
                && Objects.equals(photo, salle.photo) && Objects.equals(equipement, salle.equipement);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, photo, capacite, equipement);
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;

    @Override
    public String toString() {
        return "Salle{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", photo='" + photo + '\'' +
                ", capacite=" + capacite +
                ", equipement='" + equipement + '\'' +
                '}';
    }

    @Column(name="photo")
    private String  photo;
    @Column(name = "capacite")
    private int capacite;
    @Column(name = "equipement")
    private String equipement;

    public String getEquipement() {
        return equipement;
    }



    public Salle() {
    }



}
