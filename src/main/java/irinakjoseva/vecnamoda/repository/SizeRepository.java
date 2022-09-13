package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.Size;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SizeRepository extends JpaRepository<Size, Integer> {
//
//    Size getById(Integer id);

}
