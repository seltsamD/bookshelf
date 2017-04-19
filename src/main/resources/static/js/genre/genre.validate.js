$(document).ready(function () {
      $('#genreForm').validate({
        rules: {
            name: {
                minlength: 1,
                maxlength: 255,
                required: true
            }
        }
    });
 
});
