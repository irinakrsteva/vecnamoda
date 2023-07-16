package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.request.UserRequestDto;
import irinakjoseva.vecnamoda.dto.response.UserResponseDto;
import irinakjoseva.vecnamoda.dto.mapper.UserMapper;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.repository.UserRepository;
import irinakjoseva.vecnamoda.service.UserService;
import irinakjoseva.vecnamoda.service.exceptions.UserAlreadyExistsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder encoder;
    private final UserMapper userMapper;

    public UserServiceImpl(UserRepository repository, UserMapper userMapper) {
        this.userRepository = repository;
        this.userMapper = userMapper;
        this.encoder = new BCryptPasswordEncoder();
    }

    // TODO Maybe should create user through UserMapper
    // But need builder pattern to encode pass
    @Override
    public UserResponseDto register(UserRequestDto userRequestDto) throws UserAlreadyExistsException {
        if (userRepository.existsByEmailIgnoreCase(userRequestDto.email) || userRepository.existsByUsernameIgnoreCase(userRequestDto.username)) {
            throw new UserAlreadyExistsException();
        }
        User user = new User(userRequestDto.name, userRequestDto.username, userRequestDto.email, encoder.encode(userRequestDto.password), User.Role.CUSTOMER);
        userRepository.save(user);
        return userMapper.toResponseDto(user);
    }

    @Override
    public UserResponseDto getByUsername(String username) {
        User user = userRepository.findOneByUsernameIgnoreCase(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username " + username + " not found."));
        return userMapper.toResponseDto(user);
    }

    @Override
    public UserResponseDto getAuthenticated(Authentication authentication) {
        User user = ((HashMap<String, User>) authentication.getDetails()).get("user");
        return userMapper.toResponseDto(user);
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }

}
