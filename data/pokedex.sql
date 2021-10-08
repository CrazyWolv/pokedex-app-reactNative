--
-- Structure de la table 'pokemon'
--

DROP TABLE IF EXISTS "pokemon";

CREATE TABLE "pokemon" (
  "id" int NOT NULL,
  "nom" varchar(255) NOT NULL,
  "description" varchar(255) NOT NULL,
  "numero" int NOT NULL
);

--
-- Contenu de la table 'pokemon'
--
INSERT INTO "pokemon" ("id", "nom", "description", "numero") VALUES
(1209, 'Bulbizarre', 'b', 1),
(1210, 'Herbizarre', 'h', 2),
(1211, 'Florizarre', 'f', 3),
(1212, 'Salameche', 's', 4),
(1213, 'Reptincel', 'r', 5),
(1214, 'Dracaufeu', , 'd', 6),
(1215, 'Carapuce', 'c', 7),
(1216, 'Carabaffe', 'ca', 8),
(1217, 'Tortank', , 't', 9),
(1218, 'Chenipan', 'ch', 10),
(1219, 'Chrysacier', 'chr', 11),
(1220, 'Papilusion', 'p', 12),
(1221, 'Aspicot', 'a', 13),
(1222, 'Coconfort', 'co', 14),
(1223, 'Dardargnan', 'da', 15),
(1224, 'Roucool', 'r', 16),
(1225, 'Roucoups', 'ro', 17),
(1226, 'Roucarnage', 'rou', 18)