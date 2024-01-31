-- CRIA TABELA DE NUMEROS E ADICIONA OS NUMEROS DE 1 A 60
CREATE TABLE `numeros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;

INSERT INTO numeros (numero) VALUES (1);
INSERT INTO numeros (numero) VALUES (2);
INSERT INTO numeros (numero) VALUES (3);
INSERT INTO numeros (numero) VALUES (4);
INSERT INTO numeros (numero) VALUES (5);
INSERT INTO numeros (numero) VALUES (6);
INSERT INTO numeros (numero) VALUES (7);
INSERT INTO numeros (numero) VALUES (8);
INSERT INTO numeros (numero) VALUES (9);
INSERT INTO numeros (numero) VALUES (10);
INSERT INTO numeros (numero) VALUES (11);
INSERT INTO numeros (numero) VALUES (12);
INSERT INTO numeros (numero) VALUES (13);
INSERT INTO numeros (numero) VALUES (14);
INSERT INTO numeros (numero) VALUES (15);
INSERT INTO numeros (numero) VALUES (16);
INSERT INTO numeros (numero) VALUES (17);
INSERT INTO numeros (numero) VALUES (18);
INSERT INTO numeros (numero) VALUES (19);
INSERT INTO numeros (numero) VALUES (20);
INSERT INTO numeros (numero) VALUES (21);
INSERT INTO numeros (numero) VALUES (22);
INSERT INTO numeros (numero) VALUES (23);
INSERT INTO numeros (numero) VALUES (24);
INSERT INTO numeros (numero) VALUES (25);
INSERT INTO numeros (numero) VALUES (26);
INSERT INTO numeros (numero) VALUES (27);
INSERT INTO numeros (numero) VALUES (28);
INSERT INTO numeros (numero) VALUES (29);
INSERT INTO numeros (numero) VALUES (30);
INSERT INTO numeros (numero) VALUES (31);
INSERT INTO numeros (numero) VALUES (32);
INSERT INTO numeros (numero) VALUES (33);
INSERT INTO numeros (numero) VALUES (34);
INSERT INTO numeros (numero) VALUES (35);
INSERT INTO numeros (numero) VALUES (36);
INSERT INTO numeros (numero) VALUES (37);
INSERT INTO numeros (numero) VALUES (38);
INSERT INTO numeros (numero) VALUES (39);
INSERT INTO numeros (numero) VALUES (40);
INSERT INTO numeros (numero) VALUES (41);
INSERT INTO numeros (numero) VALUES (42);
INSERT INTO numeros (numero) VALUES (43);
INSERT INTO numeros (numero) VALUES (44);
INSERT INTO numeros (numero) VALUES (45);
INSERT INTO numeros (numero) VALUES (46);
INSERT INTO numeros (numero) VALUES (47);
INSERT INTO numeros (numero) VALUES (48);
INSERT INTO numeros (numero) VALUES (49);
INSERT INTO numeros (numero) VALUES (50);
INSERT INTO numeros (numero) VALUES (51);
INSERT INTO numeros (numero) VALUES (52);
INSERT INTO numeros (numero) VALUES (53);
INSERT INTO numeros (numero) VALUES (54);
INSERT INTO numeros (numero) VALUES (55);
INSERT INTO numeros (numero) VALUES (56);
INSERT INTO numeros (numero) VALUES (57);
INSERT INTO numeros (numero) VALUES (58);
INSERT INTO numeros (numero) VALUES (59);
INSERT INTO numeros (numero) VALUES (60);


CREATE TABLE `lotofacil_resultados` (
  `concurso` int(11) NOT NULL,
  `data_sorteio` datetime DEFAULT NULL,
  `bola_1` int(11) DEFAULT NULL,
  `bola_2` int(11) DEFAULT NULL,
  `bola_3` int(11) DEFAULT NULL,
  `bola_4` int(11) DEFAULT NULL,
  `bola_5` int(11) DEFAULT NULL,
  `bola_6` int(11) DEFAULT NULL,
  `bola_7` int(11) DEFAULT NULL,
  `bola_8` int(11) DEFAULT NULL,
  `bola_9` int(11) DEFAULT NULL,
  `bola_10` int(11) DEFAULT NULL,
  `bola_11` int(11) DEFAULT NULL,
  `bola_12` int(11) DEFAULT NULL,
  `bola_13` int(11) DEFAULT NULL,
  `bola_14` int(11) DEFAULT NULL,
  `bola_15` int(11) DEFAULT NULL,
  `ganhadores_15` int(11) DEFAULT NULL,
  `rateio_15` decimal(13,2) DEFAULT NULL,
  `ganhadores_14` int(11) DEFAULT NULL,
  `rateio_14` decimal(13,2) DEFAULT NULL,
  `ganhadores_13` int(11) DEFAULT NULL,
  `rateio_13` decimal(13,2) DEFAULT NULL,
  `ganhadores_12` int(11) DEFAULT NULL,
  `rateio_12` decimal(13,2) DEFAULT NULL,
  `ganhadores_11` int(11) DEFAULT NULL,
  `rateio_11` decimal(13,2) DEFAULT NULL,
  `acumulado` decimal(13,2) DEFAULT NULL,
  `arrecadacao_total` decimal(13,2) DEFAULT NULL,
  `estimativa_proximo_premio` decimal(13,2) DEFAULT NULL,
  `acumulado_especial` decimal(13,2) DEFAULT NULL,
  PRIMARY KEY (`concurso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `test_resultados` (
  `bola_1` int(11) NOT NULL,
  `bola_2` int(11) NOT NULL,
  `bola_3` int(11) NOT NULL,
  `bola_4` int(11) NOT NULL,
  `bola_5` int(11) NOT NULL,
  `bola_6` int(11) NOT NULL,
  `bola_7` int(11) NOT NULL,
  `bola_8` int(11) NOT NULL,
  `bola_9` int(11) NOT NULL,
  `bola_10` int(11) NOT NULL,
  `bola_11` int(11) NOT NULL,
  `bola_12` int(11) NOT NULL,
  `bola_13` int(11) NOT NULL,
  `bola_14` int(11) NOT NULL,
  `bola_15` int(11) NOT NULL,
  `acertos_11` int(11) DEFAULT NULL,
  `acertos_12` int(11) DEFAULT NULL,
  `acertos_13` int(11) DEFAULT NULL,
  `acertos_14` int(11) DEFAULT NULL,
  `acertos_15` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_combination` (`bola_1`,`bola_2`,`bola_3`,`bola_4`,`bola_5`,`bola_6`,`bola_7`,`bola_8`,`bola_9`,`bola_10`,`bola_11`,`bola_12`,`bola_13`,`bola_14`,`bola_15`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
