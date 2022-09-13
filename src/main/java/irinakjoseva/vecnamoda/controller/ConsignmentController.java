package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.dto.response.ConsignmentResponseDto;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.service.ConsignmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("api/consignments")
public class ConsignmentController {

    private final ConsignmentService consignmentService;

    public ConsignmentController(ConsignmentService consignmentService) {
        this.consignmentService = consignmentService;
    }

    @PostMapping
//    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<ConsignmentResponseDto> save(Authentication authentication) {
        User user = ((HashMap<String, User>) authentication.getDetails()).get("user");
        return ResponseEntity.ok(consignmentService.saveConsignment(user));
    }

    @GetMapping(value = "/getbytoken/{token}")
    public ResponseEntity<ConsignmentResponseDto> getByToken(@PathVariable("token") String token) {
        return ResponseEntity.ok(consignmentService.findByToken(token));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<ConsignmentResponseDto> getById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(consignmentService.findById(id));
    }

    @GetMapping(value = "/{id}/articles")
    public ResponseEntity<List<ArticleResponseDto>> getAllArticles(@PathVariable("id") Long id) {
        return ResponseEntity.ok(consignmentService.getArticles(id));
    }

    @GetMapping
    public ResponseEntity<List<ConsignmentResponseDto>> getConsignments() {
        return ResponseEntity.ok(consignmentService.getAllConsignments());
    }


}
