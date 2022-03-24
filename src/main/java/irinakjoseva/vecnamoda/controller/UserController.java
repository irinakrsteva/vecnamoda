package irinakjoseva.vecnamoda.controller;

import irinakjoseva.vecnamoda.service.dto.UserDto;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.service.impl.UserServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;

@RestController
@RequestMapping("api/users")
public class UserController {

    @Autowired
    private final UserServiceImpl userService;

    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping({"/hello"})
    public ResponseEntity firstPage() {
        return ResponseEntity.ok("Hello world");
    }

    @PostMapping(value = "/register")
    public ResponseEntity save(@RequestBody @Valid UserDto userDto) {
        return ResponseEntity.ok(this.userService.save(userDto));
    }

    @GetMapping(value = "/{username}")
    public ResponseEntity<User> getByUsername(@PathVariable("username") String username) {
        User user = this.userService.getByUsername(username);
        return ResponseEntity.ok(user);
    }
    @GetMapping(value = "/current")
    public ResponseEntity<User> getCurrent(Authentication authentication) {
        return ResponseEntity.ok(
                ((HashMap<String, User>) authentication.getDetails()).get("account")
        );
    }

    // ??????????????
    @DeleteMapping(value = "/delete/{id}")
    //@PreAuthorize("hasAuthority(\"" + Constants.USER_ROLE + "\")")
    public ResponseEntity delete(@PathVariable ("id") Long id) {
        this.userService.delete(id);
        return ResponseEntity.ok().build();
    }

}
