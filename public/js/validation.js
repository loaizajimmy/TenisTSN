$(function () {

    $('.ui.form1').form({
        inline: true,
        on: 'submit',
        fields: {
            bodega: {
                identifier: 'bodega',
                rules: [{
                    type: 'empty',
                    prompt: 'Por favor seleccione una bodega'
                }]
            },
            estante: {
                identifier: 'estante',
                rules: [{
                    type: 'empty',
                    prompt: 'Por favor seleccione una estante'
                }]
            },
            estilo: {
                identifier: 'estilo',
                rules: [{
                    type: 'empty',
                    prompt: 'Por favor seleccione una estilo'
                }]
            },
            genero: {
                identifier: 'genero',
                rules: [{
                    type: 'empty',
                    prompt: 'Por favor seleccione un género'
                }]
            },
            marca: {
                identifier: 'marca',
                rules: [{
                    type: 'empty',
                    prompt: 'Por favor seleccione una marca'
                }]
            }
        }
    });
    $('.ui.form2').form({
        inline: true,
        on: 'submit',
        fields: {
            talla: {
                identifier: 'talla',
                rules: [{
                    type: 'empty',
                    prompt: 'Por favor seleccione una talla'
                }]
            },
            color: {
                identifier: 'color',
                rules: [{
                    type: 'empty',
                    prompt: 'Por favor seleccione un color'
                }]
            },
            cantidad: {
                identifier: 'cantidad',
                rules: [{
                    type: 'empty',
                    prompt: 'Por favor seleccione una cantidad'
                }]
            }
        }
    });
});