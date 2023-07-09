package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.dto.response.ConsignmentResponseDto;
import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.model.Consignment;
import irinakjoseva.vecnamoda.model.User;

import java.util.List;

public interface ConsignmentService {

    ConsignmentResponseDto saveConsignment(User user);

    ConsignmentResponseDto findByToken(String token);

    List<ConsignmentResponseDto> getConsignmentsByUserId(Long userId);

    List<ArticleResponseDto> getArticles(Long consignmentId);

    List<ConsignmentResponseDto> getAllConsignments();

    Consignment map(Long id);

    ConsignmentResponseDto findById(Long id);

}
