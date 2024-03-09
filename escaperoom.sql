/*
SQLyog Community v13.2.0 (64 bit)
MySQL - 10.4.28-MariaDB : Database - escaperoom
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`escaperoom` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `escaperoom`;

/*Table structure for table `room` */

DROP TABLE IF EXISTS `room`;

CREATE TABLE `room` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `genre` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `name_of_room` varchar(255) DEFAULT NULL,
  `num_of_rooms_on_loc` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `room` */

insert  into `room`(`id`,`genre`,`level`,`name_of_room`,`num_of_rooms_on_loc`) values 
(1,'HORROR',1,'Krvavi dijamant',2),
(2,'THEMATIC',1,'Betmen',2),
(3,'THEMATIC',1,'Naruto ',2),
(4,'ANMBIENTAL',1,'Bajka',3),
(5,'MYSTERIOUS',2,'Ekskalibur',3),
(6,'HORROR',2,'Ritual smrti',2),
(7,'AMBIENTAL',2,'Pirati',1),
(8,'DETECTIVE',3,'Robin Hood',3),
(9,'HORROR',2,'Krug',2),
(10,'HORROR',3,'Anabel: ukleta kuca',3),
(11,'HORROR',2,'Djavo u meni',3),
(12,'AMBIENTAL',2,'Gospodar prstenova',2),
(13,'THEMATIC',1,'Anime world',2),
(14,'MYSTERIOUS',2,'Alhemicar',2),
(15,'DETECTIVE',3,'Ubistvo u masonskoj lozi',3),
(16,'DETECTIVE',3,'Blago inkvizicije',4),
(17,'DETECTIVE',3,'Cernobilj',2),
(18,'HORROR',2,'Hladnjaca: u kandzama psihopate',2),
(19,'SPECIFIC',3,'Nestala simfonija',2),
(20,'HORROR',2,'Funhouse-misterija krvavog cirkusa',1),
(21,'HORROR',1,'Mesareva tamnica',3),
(22,'DETECTIVE',2,'Narkos: Bekstvo iz zatvora',2),
(23,'SPECIFIC',1,'Mamurluk',3),
(24,'MYSTERIOUS',2,'Bekstvo iz Askabana',2),
(25,'AMBIENTAL',3,'Koma',3),
(26,'HORROR',2,'Hostel 13',3),
(27,'SPECIFIC',2,'Coming home',1),
(28,'MYSTERIOUS',3,'Teslin genijalni um',3),
(29,'HORROR',2,'Horor zlikovci',4),
(30,'SPECIFIC',2,'Beyond medusa\'s gate',3),
(31,'MYSTERIOUS',1,'Indiana Dzons - Izgubljena lobanja',1),
(32,'SPECIFIC',1,'Kafana Jugoslavija',3),
(33,'THEMATIC',1,'Osvetnici',3),
(34,'AMBIENTAL',2,'Muzej',2),
(35,'AMBIENTAL',1,'Izgubljeni u dzungli',4),
(36,'DETECTIVE',3,'Istrazitelji iz Beograda',2),
(37,'AMBIENTAL',2,'Voodoo tales',3),
(38,'DETECTIVE',2,'Divlji zapad',4),
(39,'SPECIFIC',2,'Bekstvo od serijskog ubice - Divided',2),
(40,'DETECTIVE',2,'Smrtna kazna',3),
(41,'HORROR',1,'Kosmar',3),
(42,'MYSTERIOUS',3,'Tajna biblioteka',4),
(43,'THEMATIC',1,'Prvi srpski ustanak',1),
(44,'MYSTERIOUS',2,'Drakuline odaje',3),
(45,'SPECIFIC',2,'Escape na otvorenom - potraga za blagom',1),
(46,'SPECIFIC',1,'Duel-Put oko sveta',3),
(47,'AMBIENTAL',2,'Carobnjakova kletva',3),
(48,'THEMATIC',1,'Invazija vanzemaljaca',1),
(49,'SPECIFIC',3,'Escape the lost pyramid',2),
(50,'MYSTERIOUS',2,'Aladinova lampa',2),
(51,'HORROR',1,'Vestica',1),
(52,'AMBIENTAL',2,'Balkan Express',2),
(53,'THEMATIC',1,'Basketball',1),
(54,'AMBIENTAL',1,'Svemir',2),
(55,'THEMATIC',1,'Bekstvo iz skole',2),
(56,'MYSTERIOUS',3,'Enigma',3),
(57,'MYSTERIOUS',2,'Nestali kuglas',2),
(58,'DETECTIVE',3,'Laboratorija',3),
(59,'AMBIENTAL',2,'Alisa',1),
(60,'MYSTERIOUS',2,'Vremenski haker',2),
(61,'MYSTERIOUS',2,'Tajna Nikole Tesle',2),
(62,'DETECTIVE',2,'Terorista',2),
(63,'THEMATIC',3,'Civilizacija',3),
(64,'THEMATIC',3,'Japan',3),
(65,'THEMATIC',1,'Igra prestola - Kuca Lanistera',1),
(66,'SPECIFIC',3,'2h kvalitetne kocke',1),
(67,'DETECTIVE',2,'Protokol',2),
(68,'SPECIFIC',2,'CSI Serbia',2);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
