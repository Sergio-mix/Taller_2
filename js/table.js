
$(document).ready(function () {
    $('#data-table').DataTable({
        "ajax": "/json/pets-citizens.json",
        "columns": [
            { "data": "microchip" },
            { "data": "species" },
            { "data": "sex" },
            { "data": "size" },
            { "data": "potentDangerous" },
            { "data": "neighborhood" }
        ]
    });
});

