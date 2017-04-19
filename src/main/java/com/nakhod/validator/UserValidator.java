package com.nakhod.validator;

import com.nakhod.entity.User;
import com.nakhod.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

@Component
public class UserValidator implements Validator {
    @Autowired
    private UserService userService;

    @Override
    public boolean supports(Class<?> aClass) {
        return User.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        User user = (User) o;

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "username", "This field is required.");
        if (user.getUsername().length() < 3 || user.getUsername().length() > 30) {
            errors.rejectValue("username", "Please use between 3 and 30 characters.");
        }
        if (userService.findByUsername(user.getUsername()) != null) {
            errors.rejectValue("username", "Someone already has that username.");
        }

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password", "NotEmpty");
        if (user.getPassword().length() < 3 || user.getPassword().length() > 30) {
            errors.rejectValue("password", "Please use between 3 and 30 characters.");
        }

        if (!user.getConfirmationPassword().equals(user.getPassword())) {
            errors.rejectValue("passwordConfirm", "These passwords don't match.");
        }
    }
}