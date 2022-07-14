package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.model.Blob;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

public interface BlobService {

    Blob save(MultipartFile file) throws IOException;

    Optional<Byte[]> getById(Long id);

}
