$(document).ready(function(){
    $('#btnSend').click(function(){
        var errores = "";

        //Validación de nombre
        if($('#names').val() == ''){
            errores += '<p>Escriba su nombre</p>';
            $('#names').css("border-bottom-color", "#f14b4b")
        }else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        //Valición de correo
        if($('#email').val() == ''){
            errores += '<p>Escriba su correo electrónico</p>';
            $('#email').css("border-bottom-color", "#f14b4b")
        }else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        //Validación de mensaje
        if($('#mensaje').val() == ''){
            errores += '<p>Escriba su mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#f14b4b")
        }else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        //Enviado mensaje

        if(errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Error al enviar el mensaje</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'
            $('body').append(mensajeModal);
        }

        //Cerrar Modal

        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });
});