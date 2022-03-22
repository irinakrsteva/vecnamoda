package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.service.dto.UserDto;

public interface UserService {

    User save(UserDto userDto);

    User getByUsername(String username);

}
