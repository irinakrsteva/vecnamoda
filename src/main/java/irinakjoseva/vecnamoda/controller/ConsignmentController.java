package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.response.ConsignmentResponseDto;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.service.ConsignmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
    @PreAuthorize("hasAuthority('CUSTOMER')")
    public ResponseEntity<ConsignmentResponseDto> save(Authentication authentication) {
        User user = ((HashMap<String, User>) authentication.getDetails()).get("user");
        return ResponseEntity.ok(consignmentService.createNew(user));
    }

    @GetMapping
    @PreAuthorize("hasAnyAuthority('EMPLOYEE', 'ADMIN')")
    public ResponseEntity<List<ConsignmentResponseDto>> getConsignments() {
        return ResponseEntity.ok(consignmentService.getAllConsignments());
    }

    @GetMapping(value = "/getbytoken/{token}")
    @PreAuthorize("hasAnyAuthority('EMPLOYEE', 'ADMIN')")
    public ResponseEntity<ConsignmentResponseDto> getByToken(@PathVariable("token") String token) {
        return ResponseEntity.ok(consignmentService.getByToken(token));
    }

    @GetMapping(value = "/getbyuser/{userId}")
    @PreAuthorize("hasAnyAuthority('EMPLOYEE', 'ADMIN')")
    public ResponseEntity<List<ConsignmentResponseDto>> getByUser(@PathVariable("userId") Long userId) {
        return ResponseEntity.ok(consignmentService.getAllByUserId(userId));
    }

    @GetMapping(value = "/currentuser")
    public ResponseEntity<List<ConsignmentResponseDto>> getConsignmentsByCurrentUser(Authentication authentication) {
        User user = ((HashMap<String, User>) authentication.getDetails()).get("user");
        List<ConsignmentResponseDto> consignments = consignmentService.getAllByUserId(user.getId());
        return ResponseEntity.ok(consignments);
    }

//    @GetMapping(value = "/{id}")
//    public ResponseEntity<ConsignmentResponseDto> getById(@PathVariable("id") Long id) {
//        return ResponseEntity.ok(consignmentService.findById(id));
//    }
//
//    @GetMapping(value = "/{id}/articles")
//    public ResponseEntity<List<ArticleResponseDto>> getAllArticles(@PathVariable("id") Long id) {
//        return ResponseEntity.ok(consignmentService.getArticles(id));
//    }

}
