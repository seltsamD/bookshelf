$(document).ready(function () {
      $('#authorForm').validate({
        rules: {
            firstname: {
                minlength: 1,
                maxlength: 255,
                required: true
            },
            lastname: {
                minlength: 1,
                maxlength: 255,
                required: true
            },
            biography: {
                minlength: 10,
                maxlength: 1000,
                required: true
            }
        }
    });
 
});
