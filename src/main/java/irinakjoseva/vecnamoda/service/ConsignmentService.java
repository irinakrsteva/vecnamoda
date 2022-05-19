package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.model.Consignment;
import irinakjoseva.vecnamoda.model.User;

import java.util.ArrayList;

// TODO: Figure out when to add consignment and how to do it with a group of articles
// (Maybe it needs to be processed only in bulk? so articles are also not added in db until entire list of them is defined)

public interface ConsignmentService {

    abstract Consignment saveConsignment(ArrayList<Article> articles, User user);

}
