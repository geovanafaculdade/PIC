/*Insere produtos*/

INSERT INTO cafe (descricao, valor, quantidade) VALUES ('Mocha', 'R$14,99', '300ml');
INSERT INTO cafe (descricao, valor, quantidade) VALUES ('Chocolate Frades', 'R$16,50', '300ml');
INSERT INTO cafe (descricao, valor, quantidade) VALUES ('Frappe', 'R$10,99', '300ml');
INSERT INTO cafe (descricao, valor, quantidade) VALUES ('Café Gelado', 'R$11,99', '350ml');
INSERT INTO cafe (descricao, valor, quantidade) VALUES ('Cappuccino Nutella', 'R$19,99', '400ml');
INSERT INTO cafe (descricao, valor, quantidade) VALUES ('Café Baunilha', 'R$10,50', '120ml');

/*Insere itens no carrinho - Exemplo para o Mocha*/

INSERT INTO carrinho (descricao, cafe_id) VALUES ('Mocha', 1);


/*Exclui itens do carrinho - Exemplo para o Mocha*/

DELETE from carrinho where cafe_id = 1; 

/*Query para exibição do carrinho*/

SELECT cafe.descricao, cafe.valor FROM cafe INNER JOIN carrinho ON (cafe.descricao = carrinho.descricao); 

