<?php
// liberar acesso ao IONIC
header("Acess-Control-Allow-Origin:*");
// criar a conexao

$con = new PDO("mysql:host=localhost;dbname=bdionic;charset=utf8",  "root", "");

//criar o comando sql
$sql=$con->prepare("select * from clientes");

//executar o comando sql
$sql->execute();

//receber o valor do banco
$result=$sql->fetchAll(PDO::FETCH_ASSOC);

// imprimir o resultado
//var_dump($result);

//retornar json para app
echo json_encode($result);

?>