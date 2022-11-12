package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.request.ColorRequestDto;
import irinakjoseva.vecnamoda.dto.response.ColorResponseDto;
import irinakjoseva.vecnamoda.service.ColorService;
import irinakjoseva.vecnamoda.service.impl.ColorServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/colors")
public class ColorController {

    private final ColorService colorService;

    public ColorController(ColorService colorService) {
        this.colorService = colorService;
    }

    @GetMapping
    public ResponseEntity<List<ColorResponseDto>> getColors() {
        return ResponseEntity.ok(colorService.getAllColors());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ColorResponseDto> getColor(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(colorService.getColor(id));
    }

}
