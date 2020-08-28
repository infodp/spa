<?php
include "conexion.php";
function getParams($input){  
    $filterParams = [];
    foreach($input as $param => $value){
        $filterParams[] = "$param=:$param";
    }
    return implode(", ", $filterParams);
}
function bindAllValues($statement, $params){
    foreach($params as $param => $value){
        $statement->bindValue(':'.$param, $value);
    }
    return $statement;
}