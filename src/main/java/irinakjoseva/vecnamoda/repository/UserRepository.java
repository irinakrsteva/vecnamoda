package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findOneByUsernameIgnoreCase(String username);

    Optional<User> findOneByEmailIgnoreCase(String email);

    Boolean existsByUsernameIgnoreCase(String username);

    Boolean existsByEmailIgnoreCase(String email);

}
