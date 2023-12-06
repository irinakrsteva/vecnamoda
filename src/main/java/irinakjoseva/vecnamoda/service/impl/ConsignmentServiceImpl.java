package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.mapper.ArticleMapper;
import irinakjoseva.vecnamoda.dto.mapper.ConsignmentMapper;
import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.dto.response.ConsignmentResponseDto;
import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.model.Consignment;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.repository.ConsignmentRepository;
import irinakjoseva.vecnamoda.service.ConsignmentService;
import irinakjoseva.vecnamoda.service.exceptions.NotFound404Exception;
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
    public ConsignmentResponseDto createNew(User user) {
        UUID token = UUID.randomUUID();

        Consignment consignment = new Consignment(user, token.toString());
        consignmentRepository.save(consignment);

        return consignmentMapper.toResponseDto(consignment);
    }

    @Override
    public ConsignmentResponseDto getByToken(String token) {
        Consignment consignment = consignmentRepository
                .findByToken(token)
                .orElseThrow(() -> new NotFound404Exception("token: " + token));
        return consignmentMapper.toResponseDto(consignment);
    }

    @Override
    public ConsignmentResponseDto getById(Long id) {
        Consignment consignment = consignmentRepository
                .findById(id)
                .orElseThrow(() -> new NotFound404Exception("id: " + id));
        return consignmentMapper.toResponseDto(consignment);
    }

    @Override
    public List<ConsignmentResponseDto> getAllConsignments() {
        List<Consignment> consignments = consignmentRepository.findAll();
        return consignmentMapper.toResponseDtos(consignments);
    }

    @Override
    public List<ConsignmentResponseDto> getAllByUserId(Long userId) {
        List<Consignment> consignments = consignmentRepository.findAllByUser(userId);
        return consignmentMapper.toResponseDtos(consignments);
    }

    
    @Override
    public Consignment map(Long id) {
        return consignmentRepository.findById(id)
                .orElse(null);
    }

}
