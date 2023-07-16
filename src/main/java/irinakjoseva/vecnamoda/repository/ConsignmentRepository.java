package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.Consignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ConsignmentRepository extends JpaRepository<Consignment, Long> {

    Optional<Consignment> findByToken(String token);

    @Query("select consignments from Consignment consignments " +
        "where consignments.user.id = :userId")
    List<Consignment> findAllByUser(@Param("userId") Long userId);
}
