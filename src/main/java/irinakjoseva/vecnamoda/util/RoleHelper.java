package irinakjoseva.vecnamoda.util;

import irinakjoseva.vecnamoda.model.User;

import java.util.stream.Stream;

public class RoleHelper {

    public static String getPreauthorizeUnion(User.Role[] roles) {
        String[] roleStrings = Stream.of(roles).map((role) -> "hasAuthority(\'" + role.toString() + "\')").toArray(String[]::new);
        return String.join(" || ", roleStrings);
    }

}
