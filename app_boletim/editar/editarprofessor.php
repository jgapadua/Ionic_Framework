<?php
//liberar acesso ao IONIC
header("Acess-Control-Allow-Origin: *");
//criar a conexao
$con=new PDO("mysql:host=localhost;dbname=bdboletim;charset=utf8","root","");

$json=file_get_contents('php://input');
$dados=json_decode($json);

//criar o comando sql
$sql=$con->prepare("update professor set nome = ?, login = ?, senha= ? WHERE codigo = ?");

//executar o comando sql
$sql->execute(array($dados->nome,$dados->login,$dados->senha));

//receber o valor do banco
if ($con->query($sql) === TRUE) {
    echo "Editado com sucesso";
} else {
    echo "Erro editando " . $con->error;
}
//imprimir o resultado
//var_dump($result);
//retornar json para app
echo json_encode($result);

?>