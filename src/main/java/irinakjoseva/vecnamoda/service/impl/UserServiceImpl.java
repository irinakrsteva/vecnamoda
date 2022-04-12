package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.service.UserService;
import irinakjoseva.vecnamoda.controller.dto.UserDto;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.repository.UserRepository;
import irinakjoseva.vecnamoda.service.exceptions.UserAlreadyExistsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder encoder;

    public UserServiceImpl(UserRepository repository) {
        this.userRepository = repository;
        this.encoder = new BCryptPasswordEncoder();
    }

    @Override
    public User register(UserDto userDto) throws UserAlreadyExistsException {
        if(userRepository.existsByEmailIgnoreCase(userDto.email) || userRepository.existsByUsernameIgnoreCase(userDto.username)) {
            throw new UserAlreadyExistsException();
        }
        User user = new User(userDto.name, userDto.username, userDto.email, encoder.encode(userDto.password), User.Role.CUSTOMER);
        return userRepository.save(user);
    }

    @Override
    public User getByUsername(String username) {
        return userRepository.findOneByUsernameIgnoreCase(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username " + username + " not found."));
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }

}
