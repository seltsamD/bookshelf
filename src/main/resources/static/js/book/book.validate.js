$(document).ready(function () {
      $('#bookForm').validate({
        rules: {
            name: {
                minlength: 1,
                maxlength: 255,
                required: true
            },
            isbn: {
                minlength: 13,
                maxlength: 13,
                required: true
            },
            description: {
                minlength: 10,
                maxlength: 1000,
                required: true
            }
        }
    });
 
});
