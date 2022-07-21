package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.dto.response.UserResponseDto;
import irinakjoseva.vecnamoda.dto.request.UserRequestDto;
import irinakjoseva.vecnamoda.service.exceptions.UserAlreadyExistsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserService {

    UserResponseDto register(UserRequestDto userPostDto) throws UserAlreadyExistsException;

    UserResponseDto getByUsername(String username) throws UsernameNotFoundException;

    // TODO: Use mapper through service? Passing authentication doesn't work?
    UserResponseDto getAuthenticatedUser(Authentication authentication);

    void delete(Long id);

}
