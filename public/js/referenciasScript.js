$(function () {
    let valor = $('#marca');
    let id = valor.text();
    let marca = getMarca(id);

    valor.html(marca);

    $('.special.cards .image').dimmer({
        on: 'hover'
    });

    $('#btnEliminar').click(function () {
        var a = $(this).attr("data-type");
        swal({
            title: "¿Estas seguro de borrarlo?",
            text: "No podras recuperar esta referencia",
            type: a,
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Si, bórralo",
            cancelButtonText: "No, cancelar!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (a) {
            if (a) {
                borrarReferencia();
                swal("Borrado!", "la referencia fue borrada", "success");
            }
            else
                swal("Cancelado", "La referencia esta segura", "info");
        });
    });

    $('.deleteFoto').click(function () {
        const id = $(this).attr('data-id');
        swal({
            title: "¿Estas seguro de borrarlo?",
            text: "No podras recuperar esta foto",
            type: "error",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Si, bórralo",
            cancelButtonText: "No, cancelar!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (a) {
            if (a) {
                borrarFoto(id);
                swal("Borrado!", "la foto fue borrada", "success");
            }
            else
                swal("Cancelado", "La foto esta segura", "info");
        });

    })
});

function getMarca(id) {
    switch (parseInt(id)) {
        case 0:
            return "Reebook";
        case 1:
            return "Adidas";
        case 2:
            return "Nike";
        case 3:
            return "Diesel";
        case 4:
            return "Converse";
        case 5:
            return "Puma";
        case 6:
            return "New Balance";
        case 7:
            return "Scketcher";
        case 8:
            return "Jordan";
    }
}

function borrarReferencia() {
    $("#formBorrar").submit();
}

function borrarFoto(id) {

    const url=`/referencias/delete/foto/${id}?_method=DELETE`;
    let form = $("#formBorrarFoto");
    form.attr("action", url);
    form.submit();
}