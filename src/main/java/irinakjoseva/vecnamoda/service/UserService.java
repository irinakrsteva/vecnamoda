package irinakjoseva.vecnamoda.service;

import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.controller.dto.UserDto;
import irinakjoseva.vecnamoda.service.exceptions.UserAlreadyExistsException;

public interface UserService {

    User register(UserDto userDto) throws UserAlreadyExistsException;

    User getByUsername(String username);

    void delete(Long id);


}
