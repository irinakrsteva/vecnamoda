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
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
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
    public Consignment getByToken(String token) {
        return consignmentRepository.getByToken(token);
    }

    // TODO why this gabe me empty article back :'(
    @Override
    public ArticleGetDto addArticle(Consignment consignment, ArticlePostDto articlePostDto) {
        Article article = articleMapper.postDtoToModel(articlePostDto);
        consignment.addArticle(article);

        return articleMapper.toGetDto(article);

    }

    @Override
    public List<ConsignmentGetDto> getAllConsignments() {
        List<Consignment> consignments = consignmentRepository.findAll();
        return consignmentMapper.toGetDtos(consignments);
    }
}
