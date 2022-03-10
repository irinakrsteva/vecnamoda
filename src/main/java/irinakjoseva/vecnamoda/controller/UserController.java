package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.controller.dto.UserDto;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;

@Controller
@RequestMapping("api/users")
public class UserController {
    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping({ "/hello" })
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

}
