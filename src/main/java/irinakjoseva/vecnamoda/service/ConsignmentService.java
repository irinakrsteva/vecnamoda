package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.response.ArticleResponseDto;
import irinakjoseva.vecnamoda.dto.response.ConsignmentResponseDto;
import irinakjoseva.vecnamoda.dto.request.ArticleRequestDto;
import irinakjoseva.vecnamoda.model.User;

import java.util.List;

// TODO: Figure out when to add consignment and how to do it with a group of articles
// (Maybe it needs to be processed only in bulk? so articles are also not added in db until entire list of them is defined)

public interface ConsignmentService {

    ConsignmentResponseDto saveConsignment(User user);

    ConsignmentResponseDto getByToken(String token);

    ArticleResponseDto addArticle(Long consignmentId, ArticleRequestDto articlePostDto);

    List<ArticleResponseDto> getArticles(Long consignmentId);

    List<ConsignmentResponseDto> getAllConsignments();

    ConsignmentResponseDto getById(Long id);

}
