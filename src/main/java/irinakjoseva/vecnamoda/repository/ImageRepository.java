package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
}
