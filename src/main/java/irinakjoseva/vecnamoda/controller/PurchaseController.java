package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.response.PurchaseResponseDto;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.service.PurchaseService;
import irinakjoseva.vecnamoda.service.exceptions.ArticleAlreadySoldException;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("api/purchases")
public class PurchaseController {

    private final PurchaseService purchaseService;

    public PurchaseController(PurchaseService purchaseService) {
        this.purchaseService = purchaseService;
    }

    @PostMapping
    @PreAuthorize("hasAuthority('CUSTOMER')")
    public ResponseEntity<PurchaseResponseDto> save(Authentication authentication, @RequestBody List<Long> articleIds) throws ArticleAlreadySoldException {
        if (authentication == null) {
            return ResponseEntity.ok(purchaseService.savePurchase(null, articleIds));
        }
        User user = ((HashMap<String, User>) authentication.getDetails()).get("user");
        return ResponseEntity.ok(purchaseService.savePurchase(user, articleIds));
    }

    @GetMapping
    @PreAuthorize("hasAnyAuthority('EMPLOYEE', 'ADMIN')")
    public ResponseEntity<List<PurchaseResponseDto>> getPurchases() {
        return ResponseEntity.ok(purchaseService.getPurchases());
    }

    @GetMapping("/currentuser")
    public ResponseEntity<List<PurchaseResponseDto>> getPurchasesByCurrentUser(Authentication authentication) {
        User user = ((HashMap<String, User>) authentication.getDetails()).get("user");
        List<PurchaseResponseDto> purchases = purchaseService.getPurchasesByUserId(user.getId());
        return ResponseEntity.ok(purchases);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PurchaseResponseDto> getPurchase(Authentication authentication, @PathVariable Long id) {
        User user = ((HashMap<String, User>) authentication.getDetails()).get("user");
        PurchaseResponseDto purchase = purchaseService.getPurchase(id);
        if (user.getAuthorities().contains(new SimpleGrantedAuthority("CUSTOMER")) && purchase.user.id != user.getId()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
        return ResponseEntity.ok(purchase);
    }

}
