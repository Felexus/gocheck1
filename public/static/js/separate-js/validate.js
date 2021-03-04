$('.form').each(function() {
    var it = $(this);
     it.validate({
        rules: {
            message: {
                required: true,
            },
            name: {
                required: true,
            },
            nameProd: {
                required: true,	
            },
            check: {
                required: true,
            }
        },

        errorPlacement: function (error, element) {
        },

        submitHandler: function() {
            $.ajax({
                success: function(){
                    $(".thanx-trigger").trigger("click");
                }
            });
        },  
     });
 });

$('.sign-form').each(function() {
    var it = $(this);
     it.validate({
        rules: {
            phone: {
                required: true,
                minlength: 16,
            },
            sms: {
                required: true,
            },
        },

        errorPlacement: function (error, element) {
        },

        submitHandler: function() {
            $.ajax({
                success: function(){
                    location.href = "main.html"
                }
            });
        },  
     });
 });

$('.rev-form').each(function() {
    var it = $(this);
     it.validate({
        rules: {
            rev: {
                required: true,
            },
        },

        errorPlacement: function (error, element) {
        },

        submitHandler: function() {
            $.ajax({
                success: function(){
                    location.href = "main.html"
                }
            });
        },  
     });
 });