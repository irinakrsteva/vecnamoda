package irinakjoseva.vecnamoda.repository;

import irinakjoseva.vecnamoda.model.Blob;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlobRepository extends JpaRepository<Blob, Long> { }
