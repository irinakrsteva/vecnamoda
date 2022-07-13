package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.Consignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsignmentRepository extends JpaRepository<Consignment, Long> {

    Consignment getByToken(String token);

}
