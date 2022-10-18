package io.takima.demo.controllers;

import io.takima.demo.UserDAO;
import io.takima.demo.models.User;

import org.springframework.web.bind.annotation.*;

import javax.persistence.PostUpdate;
import java.util.ArrayList;
import java.util.List;

//@CrossOrigin
//@RequestMapping("users")
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/users")
//@RequestMapping("/list-users")
@RestController
public class UserController {

    private final UserDAO userDAO;

    public UserController(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @GetMapping("/list-users")
    public List<User> listUsers() {
        Iterable<User> it = userDAO.findAll();
        List <User> users = new ArrayList<>();
        it.forEach(user -> users.add(user));
        return users ;
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userDAO.deleteById(id);
    }

    @PostMapping("/add-user")
    public void addUser(@RequestBody User user) {
        userDAO.save(user);
    }

    /*@PostMapping("/edit-user/{id}")
    public void editUser(@PathVariable User user, Long id) {
        userDAO.save(user);
    }*/
    @GetMapping("/user/{id}")
    public User getbyid(@PathVariable Long id) {
        return userDAO.findById(id).get();
    }

}
