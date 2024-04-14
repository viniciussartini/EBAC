$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay:true
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });
    
    $('#telephone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 90000-0000'
    });

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            telephone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            vehicleInterest: {
                required: false
            },
            message: {
                required: true
            }
        },
        messages: {
            name: 'Este campo é obrigatório',
            telephone: 'Este campo é obrigatório',
            email: 'Este campo é obrigatório',
            vehicleInterest: 'Este campo é obrigatório',
            message: 'Este campo é obrigatório'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(event, validate) {
            let wrongFields = validate.numberOfInvalids();
            console.log(wrongFields);
        }
    })
})