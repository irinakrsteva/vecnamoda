package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findOneByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

}
