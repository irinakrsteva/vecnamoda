package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.get.ArticleGetDto;
import irinakjoseva.vecnamoda.dto.get.ConsignmentGetDto;
import irinakjoseva.vecnamoda.dto.mapper.ArticleMapper;
import irinakjoseva.vecnamoda.dto.mapper.ConsignmentMapper;
import irinakjoseva.vecnamoda.dto.post.ArticlePostDto;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.model.Consignment;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.repository.ConsignmentRepository;
import irinakjoseva.vecnamoda.service.ConsignmentService;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Service
public class ConsignmentServiceImpl implements ConsignmentService {

    private final ConsignmentRepository consignmentRepository;
    private final ConsignmentMapper consignmentMapper;
    private final ArticleMapper articleMapper;

    public ConsignmentServiceImpl(ConsignmentRepository consignmentRepository, ConsignmentMapper consignmentMapper, ArticleMapper articleMapper) {
        this.consignmentRepository = consignmentRepository;
        this.consignmentMapper = consignmentMapper;
        this.articleMapper = articleMapper;
    }

    @Transactional
    public ConsignmentGetDto saveConsignment(User user) {
        UUID token = UUID.randomUUID();

        Consignment consignment = new Consignment(user, token.toString());
        consignmentRepository.save(consignment);

        return consignmentMapper.toGetDto(consignment);
    }

    @Override
    public ConsignmentGetDto getByToken(String token) {
        Consignment consignment = consignmentRepository.getByToken(token);
        return consignmentMapper.toGetDto(consignment);
    }

    @Override
    public ConsignmentGetDto getById(Long id) {
        Consignment consignment = consignmentRepository.getById(id);
        return consignmentMapper.toGetDto(consignment);
    }

    // TODO why this gabe me empty article back :'(
    @Override
    public ArticleGetDto addArticle(Long consignmentId, ArticlePostDto articlePostDto) {
        Article article = articleMapper.postDtoToModel(articlePostDto);
        Consignment consignment = consignmentRepository.getById(consignmentId);
        consignment.addArticle(article);

        return articleMapper.toGetDto(article);
    }

    @Override
    public List<ArticleGetDto> getArticles(Long consignmentId) {
        Consignment consignment = consignmentRepository.getById(consignmentId);
        List<Article> articles = consignment.getArticles();

        return articleMapper.toGetDtos(articles);
    }

    @Override
    public List<ConsignmentGetDto> getAllConsignments() {
        List<Consignment> consignments = consignmentRepository.findAll();
        return consignmentMapper.toGetDtos(consignments);
    }

}
