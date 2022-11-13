package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.dto.mapper.PurchaseMapper;
import irinakjoseva.vecnamoda.dto.response.PurchaseResponseDto;
import irinakjoseva.vecnamoda.model.Consignment;
import irinakjoseva.vecnamoda.model.Purchase;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.service.PurchaseService;
import irinakjoseva.vecnamoda.service.exceptions.ArticleAlreadySoldException;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/purchases")
public class PurchaseController {

    private final PurchaseService purchaseService;
    private final PurchaseMapper purchaseMapper;

    public PurchaseController(PurchaseService purchaseService, PurchaseMapper purchaseMapper) {
        this.purchaseService = purchaseService;
        this.purchaseMapper = purchaseMapper;
    }

    @PostMapping
    public ResponseEntity<PurchaseResponseDto> save(Authentication authentication, @RequestBody List<Long> articleIds) throws ArticleAlreadySoldException {
        if(authentication == null) {
            return ResponseEntity.ok(purchaseService.savePurchase(null, articleIds));
        }
        User user = ((HashMap<String, User>) authentication.getDetails()).get("user");
        return ResponseEntity.ok(purchaseService.savePurchase(user, articleIds));
    }

    @GetMapping("/currentuser")
    public ResponseEntity<List<PurchaseResponseDto>> getPurchasesByUserId(Authentication authentication) {
        User user = ((HashMap<String, User>) authentication.getDetails()).get("user");
        List<PurchaseResponseDto> purchases = purchaseService.getPurchasesByUserId(user.getId());
        return ResponseEntity.ok(purchases);
    }

    @GetMapping
    public ResponseEntity<List<PurchaseResponseDto>> getPurchases() {
        return ResponseEntity.ok(purchaseService.getPurchases());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PurchaseResponseDto> getPurchase(@PathVariable Long id) {
        return ResponseEntity.ok(purchaseService.getPurchase(id));
    }

}
