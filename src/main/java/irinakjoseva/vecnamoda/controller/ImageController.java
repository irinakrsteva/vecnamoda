package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.response.ImageResponseDto;
import irinakjoseva.vecnamoda.service.ImageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;

@RestController
@RequestMapping("api/images")
public class ImageController {

    private final ImageService imageService;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    //TODO blobs validation...
    @PostMapping
    public ResponseEntity<ImageResponseDto> save(@RequestParam("file") MultipartFile file) {
        try {
            return ResponseEntity.ok(imageService.save(file));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping(value = "/public/{id}")
    public ResponseEntity<Byte[]> findImage(@PathVariable(name = "id") Long id, HttpServletResponse response) {
        return this.imageService.getById(id)
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
