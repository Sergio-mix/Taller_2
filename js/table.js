
$(document).ready(function () {
    var table=$('#data-table').DataTable({
        "ajax": "/json/pets-citizens.json",
        "columns": [
            { "data": "microchip" },
            { "data": "species" },
            { "data": "sex" },
            { "data": "size" },
            { "data": "potentDangerous" },
            { "data": "neighborhood" },
            { "defaultContent": "<button type='button' class='edit btn btn-primary'><i class='fa fa-pencil-square-o'></i></button>	<button type='button' class='eliminar btn btn-danger' data-toggle='modal' data-target='#modalEliminar' ><i class='fa fa-trash-o'></i></button>" }
        ]
    });

    data_edit("#data-table tbody",table);
});

var data_edit = function(tbody, table){
    $(tbody).on("click", "button.edit",function(){
        var data = table.row($(this).parents("tr")).data();
        console.log(data);

    });

}

