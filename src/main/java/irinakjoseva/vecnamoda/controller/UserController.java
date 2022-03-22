package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.service.dto.UserDto;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.service.impl.UserServiceImpl;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;

@RestController
@RequestMapping("api/users")
public class UserController {

    private final UserServiceImpl service;

    public UserController(UserServiceImpl service) {
        this.service = service;
    }

    @GetMapping({"/hello"})
    public ResponseEntity firstPage() {
        return ResponseEntity.ok("Hello world");
    }

    @PostMapping(value = "/register")
    public ResponseEntity save(@RequestBody @Valid UserDto userDto) {
        return ResponseEntity.ok(this.service.save(userDto));
    }

    @GetMapping(value = "/{username}")
    public ResponseEntity<User> getByUsername(@PathVariable("username") String username) {
        User user = this.service.getByUsername(username);
        return ResponseEntity.ok(user);
    }

    @GetMapping(value = "/current")
    public ResponseEntity<User> getCurrent(Authentication authentication) {
        return ResponseEntity.ok(
                ((HashMap<String, User>) authentication.getDetails()).get("account")
        );
    }
}
