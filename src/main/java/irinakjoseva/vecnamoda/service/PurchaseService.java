package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.response.PurchaseResponseDto;
import irinakjoseva.vecnamoda.model.Address;
import irinakjoseva.vecnamoda.model.User;

import java.util.List;

public interface PurchaseService {

    PurchaseResponseDto savePurchase(User user, List<Long> articleIds);

    PurchaseResponseDto getPurchase(Long id);
}
