package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.get.UserGetDto;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.dto.post.UserPostDto;
import irinakjoseva.vecnamoda.service.exceptions.UserAlreadyExistsException;
import org.springframework.security.core.Authentication;

public interface UserService {

    User register(UserPostDto userPostDto) throws UserAlreadyExistsException;

    User getByUsername(String username);

    // TODO: Use mapper through service? Passing authentication doesn't work?
    UserGetDto getAuthenticatedUser(Authentication authentication);

    void delete(Long id);

}
