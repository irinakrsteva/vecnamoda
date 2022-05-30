package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.model.Article;
import irinakjoseva.vecnamoda.model.Consignment;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.repository.ConsignmentRepository;
import irinakjoseva.vecnamoda.service.ConsignmentService;
//import irinakjoseva.vecnamoda.util.RoleHelper;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;


@Service
public class ConsignmentServiceImpl implements ConsignmentService {

    private final ConsignmentRepository consignmentRepository;

    public ConsignmentServiceImpl(ConsignmentRepository consignmentRepository) {
        this.consignmentRepository = consignmentRepository;
    }

    @Override
    @PreAuthorize("hasRole('EMPLOYEE') || hasRole('ADMIN')")
    @Transactional
    public Consignment saveConsignment(ArrayList<Article> articles, User user) {
        Consignment consignment = new Consignment();
        return consignmentRepository.save(consignment);
    }
}
