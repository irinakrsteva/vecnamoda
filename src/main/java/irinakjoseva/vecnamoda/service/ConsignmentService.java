package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.get.ArticleGetDto;
import irinakjoseva.vecnamoda.dto.get.ConsignmentGetDto;
import irinakjoseva.vecnamoda.dto.post.ArticlePostDto;
import irinakjoseva.vecnamoda.model.Consignment;
import irinakjoseva.vecnamoda.model.User;

import java.util.List;

// TODO: Figure out when to add consignment and how to do it with a group of articles
// (Maybe it needs to be processed only in bulk? so articles are also not added in db until entire list of them is defined)

public interface ConsignmentService {

    ConsignmentGetDto saveConsignment(User user);

    Consignment getByToken(String token);

    ArticleGetDto addArticle(Consignment token, ArticlePostDto articlePostDto);

    List<ConsignmentGetDto> getAllConsignments();
}
