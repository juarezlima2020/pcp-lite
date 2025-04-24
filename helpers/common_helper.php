<?php

$localhost = 'localhost';
$username = 'SYSDBA';
$password = 'mbondezan';
$dbname = 'F:\Ideal Brasil\Projetos\DATA\CAMPO_BELO060819.FDB';
$option = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");

function getConnection() {
    
  return new ibase_connect ('firebird:host=$localhost;dbname=$dbname',$username,$password);

}