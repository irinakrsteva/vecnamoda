package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.model.Blob;
import irinakjoseva.vecnamoda.repository.BlobRepository;
import irinakjoseva.vecnamoda.service.BlobService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class BlobServiceImpl implements BlobService {

    private final BlobRepository blobRepository;

    public BlobServiceImpl(BlobRepository blobRepository) {
        this.blobRepository = blobRepository;
    }

    @Override
    public Blob save(MultipartFile file) throws IOException {

        byte[] primitiveBytes = file.getBytes();
        Byte[] bytes = new Byte[primitiveBytes.length];

        for (int i = 0; i < primitiveBytes.length; i++) {
            bytes[i] = primitiveBytes[i];
        }

        Blob blob = new Blob(bytes);

        return blobRepository.save(blob);
    }

    @Override
    public Optional<Byte[]> getById(Long id) {
        return blobRepository.findById(id).map(Blob::getData);
    }
}
