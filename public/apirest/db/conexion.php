<?php
include "datosConexion.php";
  function Conectar($db)
  {
      try {
          $conexion = new PDO("mysql:host={$db['servidor']};dbname={$db['db']};charset=utf8", $db['usuario'], $db['password']);          
          $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          return $conexion;
      } catch (PDOException $e) {
          exit($e->getMessage());
      }
  }