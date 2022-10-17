package io.takima.demo;
import io.takima.demo.models.ReserveSalle;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReserveSalleDAO extends CrudRepository<ReserveSalle, Long> {
}
