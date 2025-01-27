<?php
$conexion = mysqli_connect('localhost', 'root', '', 'franklininversores') or 
die(mysql_error($mysqli));

insertar($conexion);

function insertar($conexion){

    $nombre = $_POST ['nombre'];
    $apellidos = $_POST ['apellidos'];
    $email = $_POST ['mail'];
    $contraseña = $_POST ['contraseña'];

    $consulta = "INSERT INTO  usuario (Nombre,Apellidos,Email,Contraseña) 
VALUES ('$nombre','$apellidos','$email','$contraseña')";


mysqli_query($conexion,$consulta);
mysqli_close($conexion);



}




?>