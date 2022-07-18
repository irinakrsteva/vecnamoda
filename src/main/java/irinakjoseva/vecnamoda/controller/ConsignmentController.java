package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.get.ArticleGetDto;
import irinakjoseva.vecnamoda.dto.get.ConsignmentGetDto;
import irinakjoseva.vecnamoda.dto.post.ArticlePostDto;
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
    public ResponseEntity<ConsignmentGetDto> save(Authentication authentication) {
        User user = ((HashMap<String, User>) authentication.getDetails()).get("user");
        return ResponseEntity.ok(consignmentService.saveConsignment(user));
    }

    @GetMapping(value = "/getbytoken/{token}")
    public ResponseEntity<ConsignmentGetDto> getByToken(@PathVariable("token") String token) {
        return ResponseEntity.ok(consignmentService.getByToken(token));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<ConsignmentGetDto> getById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(consignmentService.getById(id));
    }

    @PostMapping(value = "/{consignmentId}/articles")
    public ResponseEntity<ArticleGetDto> addArticle(Long consignmentId, ArticlePostDto articlePostDto) {
        return ResponseEntity.ok(consignmentService.addArticle(consignmentId, articlePostDto));
    }

    @GetMapping(value = "/{consignmentId}/articles")
    public ResponseEntity<List<ArticleGetDto>> getAllArticles(Long consignmentId) {
        return ResponseEntity.ok(consignmentService.getArticles(consignmentId));
    }

    @GetMapping
    public ResponseEntity<List<ConsignmentGetDto>> getAllConsignments() {
        return ResponseEntity.ok(consignmentService.getAllConsignments());
    }

}
