package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.Color;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColorRepository extends JpaRepository<Color, Long> {
//
//    public List<Color> findAll();

}
