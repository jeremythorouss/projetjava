package io.takima.demo.controllers;

import io.takima.demo.SalleDAO;
import io.takima.demo.models.Salle;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/salles")
//@RequestMapping("/list-users")
@RestController
public class SalleController {

    private final SalleDAO salleDAO;


    public SalleController(SalleDAO salleDAO) {
        this.salleDAO = salleDAO;
    }

    @GetMapping("/list-salles")
    public List<Salle> listSalles() {
        Iterable<Salle> it = salleDAO.findAll();
        List <Salle> salles = new ArrayList<>();
        it.forEach(salle -> salles.add(salle));
        return salles ;
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        salleDAO.deleteById(id);
    }

    @PostMapping("/add-salle")
    public void adduser(@RequestBody Salle salle) {
        salleDAO.save(salle);
    }
}
