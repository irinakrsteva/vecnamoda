package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.mapper.ArticleMapper;
import irinakjoseva.vecnamoda.dto.mapper.PurchaseMapper;
import irinakjoseva.vecnamoda.dto.response.PurchaseResponseDto;
import irinakjoseva.vecnamoda.model.Address;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.model.Purchase;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.repository.ArticleRepository;
import irinakjoseva.vecnamoda.repository.PurchaseRepository;
import irinakjoseva.vecnamoda.service.AddressService;
import irinakjoseva.vecnamoda.service.ArticleService;
import irinakjoseva.vecnamoda.service.PurchaseService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class PurchaseServiceImpl implements PurchaseService {

    private final PurchaseRepository purchaseRepository;
    private final ArticleRepository articleRepository;
    private final ArticleService articleService;
    private final AddressService addressService;
    private final PurchaseMapper purchaseMapper;
    private final ArticleMapper articleMapper;

    public PurchaseServiceImpl(PurchaseRepository repository, ArticleRepository articleRepository, ArticleService articleService, AddressService addressService, PurchaseMapper purchaseMapper, ArticleMapper articleMapper) {
        this.purchaseRepository = repository;
        this.articleRepository = articleRepository;
        this.articleService = articleService;
        this.addressService = addressService;
        this.purchaseMapper = purchaseMapper;
        this.articleMapper = articleMapper;
    }

    @Override
    @Transactional
    public PurchaseResponseDto savePurchase(User user, List<Long> articleIds) {

        articleService.changeStatusesToSold(articleIds);

        List<Article> articles = articleRepository.findAllById(articleIds);

        // this is a stand-in. In fully functioning website address would have to be passed through controller etc...
        Address address = addressService.saveMockAddress(user);
        Purchase purchase = new Purchase(user, articles, address);
        for (Article article : articles) {
            article.setPurchase(purchase);
        }

        PurchaseResponseDto responseDto = purchaseMapper.toResponseDto(purchaseRepository.save(purchase));

        return responseDto;

    }

    @Override
    public PurchaseResponseDto getPurchase(Long id) {
        return purchaseMapper.toResponseDto(purchaseRepository.getById(id));
    }
}
