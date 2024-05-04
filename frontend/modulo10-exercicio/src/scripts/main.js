$(document).ready(function() {

    $("input").on("click", function() {
        if ($(this).val() === "") {
            $(this).setSelectionRange(0, 0); // Posiciona o cursor no início do placeholder
        }
        });

    $("#telephone").mask("(00) 00000-0000");
    $("#cpf").mask("000.000.000-00");
    $("#cep").mask("00000-000");

    $("form").validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telephone: {
                required: true
            },
            cpf: {
                required: true
            },
            adress: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            name: "Este campo é obrigatório",
            email: "Este campo é obrigatório",
            telephone: "Este campo é obrigatório",
            cpf: "Este campo é obrigatório",
            adress: "Este campo é obrigatório",
            cep: "Este campo é obrigatório"
        }
    })
})