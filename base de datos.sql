create database if not exists Usuario;
use Usuario;
drop database Usuario;
drop table usuario;
create table usuario(
id int  not null primary key,
nombre varchar(90) not null,
celular varchar(13) not null,
correo varchar(90) not null)
engine=InnoDB;

	


select * from usuario;
insert into usuario values(1, "Christopher", "4271892066","thechieff3600@gmail.com");
insert into usuario values(2,"Sarahi","4271796912", "lattebonita");
