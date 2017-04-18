$(document).ready(function () {
      $('#signUpForm').validate({
        rules: {
            username: {
                minlength: 3,
                maxlength: 30,
                required: true
            },
            password: {
                minlength: 3,
                maxlength: 30,
                required: true
            },
            confirmationPassword: {
                minlength: 3,
                maxlength: 30,
                required: true
            }
        }
    });
 
});
