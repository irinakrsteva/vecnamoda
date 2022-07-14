package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.service.BlobService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;

@RestController
@RequestMapping("api/blobs")
public class BlobController {

    private final BlobService blobService;

    public BlobController(BlobService blobService) {
        this.blobService = blobService;
    }

    @PostMapping
    public ResponseEntity save(@RequestParam("file") MultipartFile file) {
        try {
            this.blobService.save(file);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping(value = "/public/{id}")
    public ResponseEntity<Byte[]> findImage(@PathVariable(name = "id") Long id, HttpServletResponse response) {
        return this.blobService.getById(id)
                .map(bytes -> {
                    try {
                        OutputStream outputStream = response.getOutputStream();
                        for (byte b : bytes) {
                            outputStream.write(b);
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    return ResponseEntity.ok(bytes);
                })
                .orElse(ResponseEntity.badRequest().build());
    }

}
