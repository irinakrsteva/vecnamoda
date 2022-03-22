package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.service.UserService;
import irinakjoseva.vecnamoda.service.dto.UserDto;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.repository.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository repository;
    private final PasswordEncoder encoder;

    public UserServiceImpl(UserRepository repository) {
        this.repository = repository;
        this.encoder = new BCryptPasswordEncoder();
    }

    public User save(UserDto userDto) {
        User user = new User(userDto.name, userDto.username, userDto.email, encoder.encode(userDto.password), User.Role.CUSTOMER);
        return repository.save(user);
    }

    public User getByUsername(String username) {
        return repository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(""));
    }

}
