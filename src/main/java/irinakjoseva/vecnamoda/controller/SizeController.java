package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.response.SizeResponseDto;
import irinakjoseva.vecnamoda.service.SizeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/sizes")
public class SizeController {

    private final SizeService sizeService;

    public SizeController(SizeService sizeService) {
        this.sizeService = sizeService;
    }

    @GetMapping
    public ResponseEntity<List<SizeResponseDto>> getSizes() {
        return ResponseEntity.ok(sizeService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<SizeResponseDto> getSize(@PathVariable("id") Integer id){
        return ResponseEntity.ok(sizeService.getById(id));
    }

}
