<?php
//liberar acesso ao IONIC
header("Acess-Control-Allow-Origin: *");
//criar a conexao
$con=new PDO("mysql:host=localhost;dbname=bdboletim;charset=utf8","root","");

$json=file_get_contents('php://input');
$dados=json_decode($json);

//criar o comando sql
$sql=$con->prepare("insert into notas(data,aluno_matricula,disciplina_codigo,professor_codigo,prova,nota) values(?,?,?,?,?,?)");

//executar o comando sql
$sql->execute(array($dados->data,$dados->aluno_matricula,$dados->disciplina_codigo,$dados->professor_codigo,$dados->prova,$dados->nota));

//receber o valor do banco
if($sql->rowCount()>0){
    $result=1;
}
else{
    $result=0;
}
//imprimir o resultado
//var_dump($result);
//retornar json para app
echo json_encode($result);

?>