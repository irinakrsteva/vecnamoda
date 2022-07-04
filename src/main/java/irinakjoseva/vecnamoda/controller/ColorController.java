package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.get.ColorGetDto;
import irinakjoseva.vecnamoda.dto.post.ColorPostDto;
import irinakjoseva.vecnamoda.model.Color;
import irinakjoseva.vecnamoda.service.impl.ColorServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/colors")
public class ColorController {

    private final ColorServiceImpl colorService;

    public ColorController(ColorServiceImpl colorService) {
        this.colorService = colorService;
    }

    @GetMapping("/getall")
    public ResponseEntity<List<ColorGetDto>> getColors() {
        return ResponseEntity.ok(colorService.getAllColors());
    }

    @PostMapping("/add")
    public ResponseEntity<ColorGetDto> addColor(@RequestBody @Valid ColorPostDto colorPostDto) {
        return ResponseEntity.ok(colorService.addColor(colorPostDto));
    }

}
