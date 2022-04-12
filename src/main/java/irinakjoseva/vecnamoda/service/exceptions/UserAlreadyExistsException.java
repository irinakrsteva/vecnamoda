package irinakjoseva.vecnamoda.service.exceptions;

public class UserAlreadyExistsException extends Throwable {

    public UserAlreadyExistsException() {
        super("Username or email is in use");
    }

}
