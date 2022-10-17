package io.takima.demo.controllers;

import io.takima.demo.ReserveSalleDAO;
import io.takima.demo.models.ReserveSalle;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

//@CrossOrigin
//@RequestMapping("users")
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/reservesalles")

@RestController
public class ReserveSalleController {
    private final ReserveSalleDAO ReserveSalleDAO;

    public ReserveSalleController(ReserveSalleDAO ReserveSalleDAO) {
        this.ReserveSalleDAO = ReserveSalleDAO;
    }

    @GetMapping("/list-reserve-room")
    public List<ReserveSalle> listReserveSalles() {
        Iterable<ReserveSalle> it = ReserveSalleDAO.findAll();
        List <ReserveSalle> reservesalles = new ArrayList<>();
        it.forEach(reservesalle -> reservesalles.add(reservesalle));
        return reservesalles ;
    }

    @DeleteMapping("/{id}") //// need change deleteUser func
    public void deleteReserveSalle(@PathVariable Long id) {
        ReserveSalleDAO.deleteById(id);
    }

    @PostMapping("/reserve-room") //// need change add User func
    public void addReserveSalle(@RequestBody ReserveSalle reservesalle) {
        ReserveSalleDAO.save(reservesalle);
    }

}
