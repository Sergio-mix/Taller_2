<?php
$microchip = $_POST['txtMicrochip'];
$species = $_POST['txtSpecies'];
$size = $_POST['txtSize'];
$race = $_POST['txtRace'];
$sex = $_POST['txtSex'];
$dangerousness = $_POST['txtDangerousness'];
$location = $_POST['txtLocation'];
$direction = $_POST['txtDirection'];
$photography = $_POST['photography'];
$Owner = $_POST['txtOwner'];


?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="https://csstools.github.io/normalize.css/11.0.0/normalize.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/r/bs-3.3.5/jq-2.1.4,dt-1.10.8/datatables.min.css" />
  <script type="text/javascript" src="https://cdn.datatables.net/r/bs-3.3.5/jqc-1.11.3,dt-1.10.8/datatables.min.js"></script>
  <script src="https://kit.fontawesome.com/dcd7aa07d4.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="">

  <link rel="stylesheet" type="text/css" href="/src/css/style.css">
  <link rel="stylesheet" type="text/css" href="/src/css/style_table.css">
  <link rel="shortcut icon" href="icons/claw-prints.png">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@1,300&display=swap" rel="stylesheet">
  <script src="/src/js/menu.js" defer></script>
  <title>Pets</title>
</head>

<body>

  <!--Menu-->
  <nav class="menu">
    <label class="logo_Menu"> <i class="fas fa-paw"></i> Pets</label>
    <ul class="menu_items">
      <li><a href="index.html">Home</a></li>
      <li><a href="to_register.html">To register</a></li>
      <li class="active"><a href="receives.php">Animals List</a></li>
    </ul>
    <samp class="btn_menu">
      <i class="fas fa-align-left"></i>
      </spsamp>
  </nav>

  <!-- Table-->
  <div class="container" style="background: #FFF; width: 100%;">
    <table id="data-table" class="table table-bordered">
      <thead>
        <tr>
          <th>Microchip</th>
          <th>Species</th>
          <th>Sex</th>
          <th>size</th>
          <th>Potent Dangerous</th>
          <th>Neighborhood</th>
          <th>Race</th>
          <th>Location</th>
          <th>Owner</th>

          <th style="width:10%" ;>Editar</th>
        </tr>
      </thead>
    </table>
  </div>

  <!--- Map-->
  <div id="map_container" style="background-color: #FFF;">
    <div id="map"></div>
    <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js" integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og==" crossorigin=""></script>
    <script src="/src/js/map_2.js"></script>
  </div>

</body>

</html>


<script>

$(document).ready(function () {
    var table = $('#data-table').DataTable({
        "ajax": "/src/json/pets-citizens.json",
        "columns": [
            { "data": "microchip" },
            { "data": "species" },
            { "data": "sex" },
            { "data": "size" },
            { "data": "potentDangerous" },
            { "data": "neighborhood" },
            { "defaultContent": "" },
            { "defaultContent": "" },
            { "defaultContent": "" },
            { "defaultContent": "<button type='button' class='edit btn btn-primary'><i class='fa fa-pencil-square-o'></i></button>	<button type='button' class='eliminar btn btn-danger' data-toggle='modal' data-target='#modalEliminar' ><i class='fa fa-trash-o'></i></button>" }
        ]
    });

    data_edit("#data-table tbody", table);
});

var data_edit = function (tbody, table) {
    $(tbody).on("click", "button.edit", function () {
        var data = table.row($(this).parents("tr")).data();
        doOpen('modify.html');
    });

}

  var fila = '<tr id="row'  + '"><td>' + <?php echo $microchip ?> + '</td><td>' + <?php echo $species ?> + '</td><td>' + <?php echo $sex ?> + '</td><td>' + <?php echo $size ?> + '</td><td>' + <?php echo $dangerousness ?> + '</td><td>' + <?php echo $direction ?> + '</td><td>' + <?php echo $race ?> + '</td><td>' + <?php echo $location ?> + '</td><td>' + <?php echo $Owner ?> + '</td><td><button type="button" class="edit btn btn-primary" onclick="doOpen("modify.html")"><i class="fa fa-pencil-square-o"></i></button>	<button type="button" class="eliminar btn btn-danger" data-toggle="modal" data-target="#modalEliminar" ><i class="fa fa-trash-o"></i></button></td></tr>';
  $('#data-table tr:first').after(fila);

  function doOpen(url) {
    document.location.target = "_blank";
    document.location.href = url;
}
</script>