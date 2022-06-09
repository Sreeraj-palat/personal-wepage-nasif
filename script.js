$(document).ready(function () {
    $("#gform").validate({
        rules: {
            name: {
                required: true,
                // minlength: 4,
                maxlength: 15,
                namevalidation: true
            }


        }
    })
    $.validator.addMethod("namevalidation", function (value, element) {
        return /^[A-Za-z]+$/.test(value);
    },
        "Sorry,only alphabets are allowed"
    );
})