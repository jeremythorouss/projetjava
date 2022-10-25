package io.takima.demo.controllers;

import io.takima.demo.ReserveSalleDAO;
import io.takima.demo.models.ReserveSalle;
import io.takima.demo.models.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

//@CrossOrigin
//@RequestMapping("users")
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/reservesalles")

@RestController
public class ReserveSalleController {
    private final ReserveSalleDAO reservesalleDAO;

    public ReserveSalleController(ReserveSalleDAO reservesalleDAO) {
        this.reservesalleDAO = reservesalleDAO;
    }

    @GetMapping("/list-reservesalle")
    public List<ReserveSalle> listReserveSalles() {
        Iterable<ReserveSalle> it = reservesalleDAO.findAll();
        List <ReserveSalle> reservesalles = new ArrayList<>();
        it.forEach(reservesalle -> reservesalles.add(reservesalle));
        return reservesalles ;
    }

    @DeleteMapping("/{id}") //// need change deleteUser func
    public void deleteReserveSalle(@PathVariable Long id) {
        reservesalleDAO.deleteById(id);
    }

    @PostMapping("/add-reservesalle") //// need change add User func
    public void addReserveSalle(@RequestBody ReserveSalle reservesalle) {
        reservesalleDAO.save(reservesalle);
    }

    @GetMapping("/reservesalle/{id}")
    public ReserveSalle getbyid(@PathVariable Long id) {
        return reservesalleDAO.findById(id).get();
    }


}
