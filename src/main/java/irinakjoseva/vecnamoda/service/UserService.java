package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.get.UserGetDto;
import irinakjoseva.vecnamoda.dto.post.UserPostDto;
import irinakjoseva.vecnamoda.service.exceptions.UserAlreadyExistsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserService {

    UserGetDto register(UserPostDto userPostDto) throws UserAlreadyExistsException;

    UserGetDto getByUsername(String username) throws UsernameNotFoundException;

    // TODO: Use mapper through service? Passing authentication doesn't work?
    UserGetDto getAuthenticatedUser(Authentication authentication);

    void delete(Long id);

}
