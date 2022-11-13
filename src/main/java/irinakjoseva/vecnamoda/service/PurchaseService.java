package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.response.PurchaseResponseDto;
import irinakjoseva.vecnamoda.model.Address;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.service.exceptions.ArticleAlreadySoldException;

import java.util.List;

public interface PurchaseService {

    PurchaseResponseDto savePurchase(User user, List<Long> articleIds) throws ArticleAlreadySoldException;

    List<PurchaseResponseDto> getPurchasesByUserId(Long userId);

    PurchaseResponseDto getPurchase(Long id);

    List<PurchaseResponseDto> getPurchases();
}
