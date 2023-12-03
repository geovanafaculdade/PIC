CREATE DATABASE dearproject;
USE dearproject;


CREATE table cafe(

id INT NOT NULL AUTO_INCREMENT,
descricao VARCHAR(45) NOT NULL,
valor VARCHAR(60) NOT NULL,
quantidade VARCHAR(25) NOT NULL, 
PRIMARY KEY(id)

);


CREATE TABLE carrinho (
    
id INT NOT NULL AUTO_INCREMENT,
descricao VARCHAR(45) NULL,
cafe_id INT,
PRIMARY KEY(id),
FOREIGN KEY (cafe_id) REFERENCES cafe(id)
);

