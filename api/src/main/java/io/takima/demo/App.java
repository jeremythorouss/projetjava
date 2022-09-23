package io.takima.demo;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//test pour voir si la bracnhe marche2
@SpringBootApplication
@EnableWebMvc
public class App {
    public static void main(String[] args) {
        // Initialize spring
        new SpringApplicationBuilder(App.class).run(args);
    }
}
