USE `guiedani`;

DESCRIBE `guiedani`.`products`;
DESCRIBE `guiedani`.`origin`;
DESCRIBE `guiedani`.`presentation`;

INSERT INTO `guiedani`.`origin` (name) VALUES ("Chiapas");
INSERT INTO `guiedani`.`origin` (name) VALUES ("Guerrero");
INSERT INTO `guiedani`.`origin` (name) VALUES ("Oaxaca");
INSERT INTO `guiedani`.`origin` (name) VALUES ("Querétaro");
INSERT INTO `guiedani`.`origin` (name) VALUES ("Veracrúz");

SELECT * FROM origin;

INSERT INTO `guiedani`.`roast` (name) VALUES ("oscuro");
INSERT INTO `guiedani`.`roast` (name) VALUES ("medio");
INSERT INTO `guiedani`.`roast` (name) VALUES ("medio oscuro");
INSERT INTO `guiedani`.`roast` (name) VALUES ("claro");

SELECT * FROM roast;

INSERT INTO `guiedani`.`presentation` (name) VALUES ("molido");
INSERT INTO `guiedani`.`presentation` (name) VALUES ("grano");

SELECT * FROM presentation;

SELECT * FROM products;

INSERT INTO `guiedani`.`products` 
	(name, price, img_1, img_2, img_3, img_4, description,
		id_origin, grams, id_roast, id_presentation) 
	VALUES (
		"Café Chiapas molido tostado oscuro", 
        139.00, 
        "https://i.ibb.co/ZmrRwgM/cafe1.jpg", 
        "https://i.ibb.co/Qn9nhpf/cafe2.png",
        "https://i.ibb.co/BC6FFdn/cafe3.png",
        "https://i.ibb.co/hghXy98/cafe-default.jpg",
        "Conoce nuestra selección de granos cultivados por productores de San Cristóbal de las Casas, Chiapas. Deléitate con este exquisito café de alta acidez, aroma intenso, sabor agradable y apreciable cuerpo.",
		1,
        480,
        1,
        1
        );
        
INSERT INTO `guiedani`.`products` 
	(name, price, img_1, img_2, img_3, img_4, description,
		id_origin, grams, id_roast, id_presentation) 
	VALUES (
		"Café Oaxaca en grano tostado medio", 
        320.00, 
        "https://i.ibb.co/Qn9nhpf/cafe2.png", 
        "https://i.ibb.co/BC6FFdn/cafe3.png",
        "https://i.ibb.co/ZmrRwgM/cafe1.jpg",
        "https://i.ibb.co/hghXy98/cafe-default.jpg",
        "Conoce nuestra selección de granos cultivados por productores de Miahuatlán, Oaxaca. Disfruta de su delicioso aroma frutal y tostado medio, en cada taza.",
		3,
        900,
        2,
        2
        );
        
INSERT INTO `guiedani`.`products` 
	(name, price, img_1, img_2, img_3, img_4, description,
		id_origin, grams, id_roast, id_presentation) 
	VALUES (
		"Café Querétaro molido tostado medio oscuro", 
		105.00, 
        "https://i.ibb.co/ZmrRwgM/cafe1.jpg", 
        "https://i.ibb.co/Qn9nhpf/cafe2.png",
        "https://i.ibb.co/BC6FFdn/cafe3.png",
        "https://i.ibb.co/hghXy98/cafe-default.jpg",
        "Conoce nuestra selección de granos cultivados por productores de Landa de Matamoros, Querétaro. Sírvete una taza de este café queretano cada mañana y deja que su intenso sabor te llene de la energía que necesitas.",
		4,
        250,
        3,
        1
        );
        
INSERT INTO `guiedani`.`products` 
	(name, price, img_1, img_2, img_3, img_4, description,
		id_origin, grams, id_roast, id_presentation) 
	VALUES (
		"Café Guerrero en grano tostado claro", 
		139.00, 
        "https://i.ibb.co/BC6FFdn/cafe3.png", 
        "https://i.ibb.co/ZmrRwgM/cafe1.jpg",
        "https://i.ibb.co/Qn9nhpf/cafe2.png",
        "https://i.ibb.co/hghXy98/cafe-default.jpg",
        "Conoce nuestra selección de granos cultivados por productores de Ojo de agua, Guerrero. Esta selección de granos de café “capulín” se caracterizan por su suave sabor y aroma, perfectos para tomar por la tarde.",
		2,
        480,
        4,
        2
        );
        
INSERT INTO `guiedani`.`products` 
	(name, price, img_1, img_2, img_3, img_4, description,
		id_origin, grams, id_roast, id_presentation) 
	VALUES (
		"Café Veracruz en grano tostado oscuro", 
		320.00, 
        "https://i.ibb.co/Qn9nhpf/cafe2.png", 
        "https://i.ibb.co/BC6FFdn/cafe3.png",
        "https://i.ibb.co/ZmrRwgM/cafe1.jpg",
        "https://i.ibb.co/hghXy98/cafe-default.jpg",
        "Conoce nuestra selección de granos cultivados por productores de Córdoba, Veracruz. Se caracteriza por tener un peculiar sabor a especias y chocolate, además de tener un aroma intenso.",
		5,
        900,
        1,
        2
        );
	