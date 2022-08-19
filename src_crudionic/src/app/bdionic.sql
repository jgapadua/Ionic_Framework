
create database bdionic;
use bdionic;

create table usuario(
codigo int unsigned auto_increment not null primary key,
nome varchar (80) not null,
login  varchar (80) not null,
senha  varchar (80) not null
);

insert into usuario(codigo,nome,login,senha) values(null,'João','joao','joao123');
insert into usuario(codigo,nome,login,senha) values(null,'Matheus','matheus','mathues123');

select * from usuario;

create table produto(
codigo int unsigned auto_increment not null primary key,
nome varchar (80) not null,
qtde  int  not null,
preco  double (9,2) not null
);

insert into produto(codigo,nome,qtde,preco) values(null,'Produto1',10,10.00);
insert into produto(codigo,nome,qtde,preco) values(null,'Produto2',8,20.00);

select * from produto;

create table clientes(
codigo int unsigned auto_increment not null primary key,
nome varchar (80) not null,
telefone char (15)  not null,
cep char (8) not null,
email varchar (100) not null
);

insert into clientes(codigo,nome,telefone,cep,email) values(null,'Cliente1','(31)99752-7346','31320-180','cliente1@gmail.com');
insert into clientes(codigo,nome,telefone,cep,email) values(null,'Cliente2','(31)98722-7346','31370-490','cliente2@gmail.com');

select * from clientes;

create table empresa(
codigo int unsigned auto_increment not null primary key,
nome varchar (80) not null,
cep char (8) not null,
telefone char (15) not null,
email varchar (100) not null
);

insert into empresa(codigo,nome,cep,telefone,email) values(null,'Empresa1','(31)99862-7346','31540-293','empresa1@gmail.com');
insert into empresa(codigo,nome,cep,telefone,email) values(null,'Empresa2','(31)97832-7346','30692-020','empresa2@gmail.com');

select * from empresa;

create table vendas(
codigo int unsigned auto_increment not null primary key,
data date not null,
hora time not null,
total double (9,2) not null,
cliente_codigo int not null,
produto_codigo int not null,

foreign key (cliente_codigo) references cliente (codigo),
foreign key (produto_codigo) references produto (codigo)
);

insert into vendas(codigo,data,hora,total,cliente_codigo,produto_codigo) values(null,'2019/05/21','10:00',100.20,1,1);
insert into vendas(codigo,data,hora,total,cliente_codigo,produto_codigo) values(null,'2019/05/21','08:00',200.00,2,2);

select * from vendas;
