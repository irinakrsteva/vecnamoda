package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {

}
