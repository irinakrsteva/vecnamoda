package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.get.UserGetDto;
import irinakjoseva.vecnamoda.dto.mapper.UserMapper;
import irinakjoseva.vecnamoda.service.UserService;
import irinakjoseva.vecnamoda.dto.post.UserPostDto;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.repository.UserRepository;
import irinakjoseva.vecnamoda.service.exceptions.UserAlreadyExistsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

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
    public UserGetDto register(UserPostDto userPostDto) throws UserAlreadyExistsException {
        if(userRepository.existsByEmailIgnoreCase(userPostDto.email) || userRepository.existsByUsernameIgnoreCase(userPostDto.username)) {
            throw new UserAlreadyExistsException();
        }
        User user = new User(userPostDto.name, userPostDto.username, userPostDto.email, encoder.encode(userPostDto.password), User.Role.CUSTOMER);
        userRepository.save(user);
        return userMapper.toGetDto(user);
    }

    @Override
    public UserGetDto getByUsername(String username) {
        User user = userRepository.findOneByUsernameIgnoreCase(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username " + username + " not found."));
        return userMapper.toGetDto(user);
    }

    @Override
    public UserGetDto getAuthenticatedUser(Authentication authentication) {
        User user = ((HashMap<String, User>) authentication.getDetails()).get("user");
        return userMapper.toGetDto(user);
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }

}
