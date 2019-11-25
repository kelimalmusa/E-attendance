-- MySQL dump 10.16  Distrib 10.1.43-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: Inspection
-- ------------------------------------------------------
-- Server version	10.1.43-MariaDB-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ders`
--
create database if not exists `Ispection`;
use Inspection

DROP TABLE IF EXISTS `ders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ders` (
  `ders_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ders_name` varchar(100) DEFAULT NULL,
  `ders_code` varchar(100) DEFAULT NULL,
  `ders_sube` varchar(100) DEFAULT NULL,
  `ders_haftalik_saat` int(10) unsigned DEFAULT NULL,
  `ders_uygulama` tinyint(1) DEFAULT NULL,
  `ders_baslangic_saat` varchar(100) DEFAULT NULL,
  `ders_hoca_id` int(10) unsigned DEFAULT NULL,
  `ders_salon` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ders_id`),
  UNIQUE KEY `ders_UN` (`ders_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `devamsizlik`
--

DROP TABLE IF EXISTS `devamsizlik`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `devamsizlik` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ogr_id` int(10) unsigned DEFAULT NULL,
  `ders_id` int(10) unsigned DEFAULT NULL,
  `islem_tarihi` varchar(100) DEFAULT NULL,
  `devamsizlik_kalma` tinyint(1) DEFAULT NULL,
  `islem_location` varchar(100) DEFAULT NULL,
  `islem_foto` blob,
  PRIMARY KEY (`id`),
  UNIQUE KEY `devamsizlik_UN` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ogrenci`
--

DROP TABLE IF EXISTS `ogrenci`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ogrenci` (
  `ogr_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ogr_no` bigint(20) unsigned NOT NULL,
  `ogr_name` varchar(100) NOT NULL,
  `ogr_surname` varchar(100) DEFAULT NULL,
  `ogr_user_id` int(10) unsigned DEFAULT NULL,
  `ogr_username` varchar(100) DEFAULT NULL,
  `ogr_ogrenim_turu` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`ogr_id`),
  UNIQUE KEY `ogrenci_UN` (`ogr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'Inspection'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-25 17:15:13
