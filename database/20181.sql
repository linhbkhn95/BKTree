-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: tree_bk
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activesystem`
--

DROP TABLE IF EXISTS `activesystem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activesystem` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activesystem`
--

LOCK TABLES `activesystem` WRITE;
/*!40000 ALTER TABLE `activesystem` DISABLE KEYS */;
/*!40000 ALTER TABLE `activesystem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `allcode`
--

DROP TABLE IF EXISTS `allcode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `allcode` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allcode`
--

LOCK TABLES `allcode` WRITE;
/*!40000 ALTER TABLE `allcode` DISABLE KEYS */;
/*!40000 ALTER TABLE `allcode` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chats`
--

DROP TABLE IF EXISTS `chats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chats` (
  `user_send` varchar(255) DEFAULT NULL,
  `user_receviced` varchar(255) DEFAULT NULL,
  `message` longtext,
  `time` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chats`
--

LOCK TABLES `chats` WRITE;
/*!40000 ALTER TABLE `chats` DISABLE KEYS */;
/*!40000 ALTER TABLE `chats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coordinates`
--

DROP TABLE IF EXISTS `coordinates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coordinates` (
  `tree_id` int(11) DEFAULT NULL,
  `X` varchar(255) DEFAULT NULL,
  `Y` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `data` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coordinates`
--

LOCK TABLES `coordinates` WRITE;
/*!40000 ALTER TABLE `coordinates` DISABLE KEYS */;
INSERT INTO `coordinates` VALUES (7,'105.8428430557251','21.006051754819403',25,'2018-04-19 05:31:28','2018-05-18 22:12:08','{\"type\": \"Feature\", \"geometry\": {\"type\": \"Point\", \"coordinates\": [105.8420330286026, 21.00667273468846]}, \"properties\": {\"name\": \"Bồ công anh\", \"note\": \"CA\", \"tree_id\": \"7\"}}'),(20,'105.8418881893158','21.00629714233457',28,'2018-04-19 06:16:29','2018-05-04 13:58:59','{\"type\": \"Feature\", \"geometry\": {\"type\": \"Point\", \"coordinates\": [105.84420025348663, 21.006562561029323]}, \"properties\": {\"name\": \"Đào\", \"note\": \"GB\", \"tree_id\": \"20\"}}'),(22,'105.84422707557678','21.004524333661756',30,'2018-04-19 06:19:03','2018-04-23 21:46:56','{\"type\": \"Feature\", \"geometry\": {\"type\": \"Point\", \"coordinates\": [105.84422707557678, 21.004524333661756]}, \"properties\": {\"name\": \"Dừa cảnh\", \"note\": \"HA\", \"tree_id\": \"22\"}}'),(7,'105.8428430557251','21.006051754819403',33,'2018-04-20 10:10:40','2018-05-18 22:12:08','{\"type\": \"Feature\", \"geometry\": {\"type\": \"Point\", \"coordinates\": [105.8451497554779, 21.007363822149376]}, \"properties\": {\"name\": \"Bồ công anh\", \"note\": \"CA\", \"tree_id\": \"7\"}}'),(1,'105.8420544862747','21.005515907210047',34,'2018-04-23 22:19:12','2018-04-23 22:19:12',NULL),(11,'105.84361016750336','21.006312166046875',35,'2018-04-23 22:34:24','2018-05-18 22:12:08',NULL),(24,'105.84313809871674','21.006632671549102',36,'2018-04-23 22:44:34','2018-05-18 22:12:08',NULL);
/*!40000 ALTER TABLE `coordinates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_tree`
--

DROP TABLE IF EXISTS `group_tree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group_tree` (
  `groupname` longtext,
  `url_image` longtext,
  `country` longtext,
  `description` longtext,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `url_image_gobal` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_tree`
--

LOCK TABLES `group_tree` WRITE;
/*!40000 ALTER TABLE `group_tree` DISABLE KEYS */;
INSERT INTO `group_tree` VALUES ('Khế ta ','images/tree/khe.jpg','Việt Nam ','1',1,NULL),('Cây bàng','images/tree/bang.jpg','Việt Nam ','lá đỏ',2,NULL),('Bồ công anh','images/tree/bo-cong-anh.jpg','Đức',NULL,3,NULL),('Chanh đào','images/tree/chanh_dao.jpg','Việt Nam ',NULL,4,NULL),('Cọ','images/tree/co.jpg','Thái Lan',NULL,5,NULL),('Cúc','images/tree/cuc.jpg','Nhật Bản',NULL,6,NULL),('Đào','images/tree/dao.jpg','Việt Nam ',NULL,7,NULL),('Dừa cảnh','images/tree/dua-canh.jpg','Malaysia',NULL,8,NULL),('Hoa gạo','images/tree/gao.jpg','Việt Nam ',NULL,9,NULL),('Hoa bằng lăng','images/tree/hoa-bang-lang.jpg','Việt Nam ',NULL,10,NULL),('Hoa sữa','images/tree/hoa-sua.jpg','Việt Nam ',NULL,11,NULL),('Hoa mai','images/tree/mai.jpg','Việt Nam ',NULL,12,NULL),('Nha đam','images/tree/nha-dam.jpg','Mỹ',NULL,13,NULL),('Cây ổi','images/tree/oi.png','Việt Nam ',NULL,14,NULL),('Cây ớt','images/tree/ot.jpg','Hàn Quốc',NULL,15,NULL),('Cây quất','images/tree/quat.jpg','Việt Nam ',NULL,16,NULL),('Cây tre','images/tree/tre.jpg','Việt Nam ',NULL,17,NULL),('Cây xoài','images/tree/xoai.png','Việt Nam ',NULL,18,NULL),('aaaaaaaaaaaaa','/images/tree/e87b03e6-c7cb-4d99-9cf7-80f3757a3cd9.jpg','a','a',23,NULL),('d','/images/tree/59d7c888-9d94-4c7b-abb3-dec0e539eb40.png','d','d',26,'/home/linhtd/Desktop/20172/PTPMPT/BKTree/assets/images/tree/59d7c888-9d94-4c7b-abb3-dec0e539eb40.png'),(NULL,'/images/tree/cfefdadd-14cf-466e-940c-d7b198d816a7.jpg',NULL,NULL,27,'/home/linhtd/Desktop/20172/PTPMPT/BKTree/assets/images/tree/cfefdadd-14cf-466e-940c-d7b198d816a7.jpg'),(NULL,'',NULL,NULL,28,NULL),(NULL,'',NULL,NULL,29,NULL),('a','','s','',30,NULL),('a','','aaaaaaaa','aaaaaaaaaaaaaaaaaaaaaa',32,NULL);
/*!40000 ALTER TABLE `group_tree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historytree`
--

DROP TABLE IF EXISTS `historytree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historytree` (
  `tree_id` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `water_use` int(11) DEFAULT NULL,
  `waterneed` int(11) DEFAULT NULL,
  `time_use` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historytree`
--

LOCK TABLES `historytree` WRITE;
/*!40000 ALTER TABLE `historytree` DISABLE KEYS */;
INSERT INTO `historytree` VALUES (1,'ngoc',100,300,'2018-2-4:12:24',1,NULL,NULL),(2,'linh',200,400,'2018-2-4:18:23',2,NULL,NULL),(1,'phuonganh',120,250,'2018-2-5:7:29',3,NULL,NULL),(2,'terry',460,1000,'2018-2-5:7:9',4,NULL,NULL),(1,'ngoc',20,50,'2018-2-5:8:10',5,NULL,NULL),(4,'phuonganh',64,98,'2018-2-5:8:4',6,NULL,NULL),(8,'ngoc',26,34,'2018-2-6:9:30',7,NULL,NULL),(3,'linh',26,21,'2018-2-6:10:41',8,NULL,NULL),(6,'terry',73,43,'2018-2-6:5:50',9,NULL,NULL),(13,'phuonganh',27,53,'2018-2-7:17:45',10,NULL,NULL),(17,'ngoc',6,30,'2018-2-8:19:0',11,NULL,NULL),(3,'linh',46,200,'2018-2-8:21:10',12,NULL,NULL),(15,'phuonganh',46,230,'2018-2-9:10:11',13,NULL,NULL),(13,'linh',25,100,'2018-2-10:4:20',14,NULL,NULL),(11,'phuonganh',81,340,'2018-2-12:10:13',15,NULL,NULL),(10,'terry',45,120,'2018-2:14:5:10',16,NULL,NULL),(5,'ngoc',87,110,'2018-2-15:10:10',17,NULL,NULL),(6,'linh',34,80,'2018-2-19:6:5',18,NULL,NULL),(7,'ngoc',87,40,'2018-2-20:9:30',19,NULL,NULL),(1,'phuonganh',52,200,'2018-2-21:17:20',20,NULL,NULL),(4,'linhtd',10,70,'1523581210182',21,'2018-04-13 08:00:10','2018-04-13 08:00:10'),(4,'linhtd',10,70,'1523581361113',22,'2018-04-13 08:02:41','2018-04-13 08:02:41'),(4,'phuonganh1',10,70,'1523597642659',23,'2018-04-13 12:34:02','2018-04-13 12:34:02'),(1,'linhtd',150,180,'1523600056672',24,'2018-04-13 13:14:16','2018-04-13 13:14:16'),(1,'linhtd',10,180,'1523930631617',25,'2018-04-17 09:03:51','2018-04-17 09:03:51'),(1,'linhtd',1,180,'1523935640339',26,'2018-04-17 10:27:20','2018-04-17 10:27:20'),(1,'linhtd',5,180,'1523935688706',27,'2018-04-17 10:28:08','2018-04-17 10:28:08'),(1,'linhtd',12,180,'1523935775331',28,'2018-04-17 10:29:35','2018-04-17 10:29:35'),(3,'linhtd',10,90,'1523935962845',29,'2018-04-17 10:32:42','2018-04-17 10:32:42'),(16,'linhtd',2,60,'1523935997518',30,'2018-04-17 10:33:17','2018-04-17 10:33:17'),(1,'linhxuan',5,180,'1523936311436',31,'2018-04-17 10:38:31','2018-04-17 10:38:31'),(1,'linhxuan',5,180,'1523936344060',32,'2018-04-17 10:39:04','2018-04-17 10:39:04'),(1,'linhtd',14,180,'1523938067406',33,'2018-04-17 11:07:47','2018-04-17 11:07:47'),(1,'linhtd',14,180,'1523938174888',34,'2018-04-17 11:09:34','2018-04-17 11:09:34'),(1,'linhtd',14,180,'1523938201210',35,'2018-04-17 11:10:01','2018-04-17 11:10:01'),(1,'linhtd',14,180,'1523938279029',36,'2018-04-17 11:11:19','2018-04-17 11:11:19'),(1,'linhtd',5,180,'1523938366303',37,'2018-04-17 11:12:46','2018-04-17 11:12:46'),(1,'linhtd',5,180,'1523938485842',38,'2018-04-17 11:14:45','2018-04-17 11:14:45'),(1,'linhtd',5,180,'1523938536401',39,'2018-04-17 11:15:36','2018-04-17 11:15:36'),(16,'linhtd',1,60,'1523943329798',40,'2018-04-17 12:35:29','2018-04-17 12:35:29'),(2,'linhtd',1,120,'1523943545341',41,'2018-04-17 12:39:05','2018-04-17 12:39:05'),(1,'linhtd',10,180,'1523943655097',42,'2018-04-17 12:40:55','2018-04-17 12:40:55'),(1,'linhtd',1,180,'1523981232234',43,'2018-04-17 23:07:12','2018-04-17 23:07:12'),(1,'linhxuan',1,180,'1523981320490',44,'2018-04-17 23:08:40','2018-04-17 23:08:40'),(1,'linhxuan',1,180,'1523981722124',45,'2018-04-17 23:15:22','2018-04-17 23:15:22'),(1,'linhxuan',11,180,'1523986273371',46,'2018-04-18 00:31:13','2018-04-18 00:31:13'),(1,'linhtd',10,180,'1523986412621',47,'2018-04-18 00:33:32','2018-04-18 00:33:32'),(1,'linhxuan',1,180,'1523986475924',48,'2018-04-18 00:34:35','2018-04-18 00:34:35'),(1,'linhxuan',10,180,'1524058220592',49,'2018-04-18 20:30:20','2018-04-18 20:30:20'),(1,'linhxuan',10,180,'1524058290201',50,'2018-04-18 20:31:30','2018-04-18 20:31:30'),(1,'linhxuan',10,180,'1524058417795',51,'2018-04-18 20:33:37','2018-04-18 20:33:37'),(1,'linhxuan',10,180,'1524058653746',52,'2018-04-18 20:37:33','2018-04-18 20:37:33'),(1,'linhxuan',10,180,'1524058733185',53,'2018-04-18 20:38:53','2018-04-18 20:38:53'),(1,'linhxuan',10,180,'1524058833884',54,'2018-04-18 20:40:33','2018-04-18 20:40:33'),(1,'linhxuan',10,180,'1524058887695',55,'2018-04-18 20:41:27','2018-04-18 20:41:27'),(1,'linhtd',1,180,'1524063886272',56,'2018-04-18 22:04:46','2018-04-18 22:04:46'),(1,'linhtd',12,180,'1524063900061',57,'2018-04-18 22:05:00','2018-04-18 22:05:00'),(1,'linhxuan',3,180,'1524063910525',58,'2018-04-18 22:05:10','2018-04-18 22:05:10'),(1,'linhxuan',3,180,'1524068792739',59,'2018-04-18 23:26:32','2018-04-18 23:26:32'),(1,'linhxuan',3,180,'1524068798204',60,'2018-04-18 23:26:38','2018-04-18 23:26:38'),(1,'linhxuan',1,180,'1524164996841',61,'2018-04-20 02:09:56','2018-04-20 02:09:56'),(1,'linhxuan',5,180,'1524193885955',62,'2018-04-20 10:11:25','2018-04-20 10:11:25'),(1,'linhxuan',1,180,'1524194609414',63,'2018-04-20 10:23:29','2018-04-20 10:23:29'),(1,'linhxuan',1,180,'1524194617010',64,'2018-04-20 10:23:37','2018-04-20 10:23:37'),(1,'linhxuan',1,180,'1524194708663',65,'2018-04-20 10:25:08','2018-04-20 10:25:08'),(20,'nhongoc',10,120,'1524636980763',66,'2018-04-25 13:16:20','2018-04-25 13:16:20'),(1,'linhtd',15,180,'1525415237549',67,'2018-05-04 13:27:17','2018-05-04 13:27:17'),(24,'linhtd',15,50,'1525415469871',68,'2018-05-04 13:31:09','2018-05-04 13:31:09'),(1,'linhtd',1,180,'1525417635898',69,'2018-05-04 14:07:15','2018-05-04 14:07:15'),(1,'phuonganh1',10,180,'1525417682453',70,'2018-05-04 14:08:02','2018-05-04 14:08:02'),(1,'linhxuan',1,180,'1526012107400',71,'2018-05-11 11:15:07','2018-05-11 11:15:07'),(1,'linhxuan',1,180,'1526012209302',72,'2018-05-11 11:16:49','2018-05-11 11:16:49'),(1,'linhxuan',10,180,'1526012384138',73,'2018-05-11 11:19:44','2018-05-11 11:19:44'),(1,'linhxuan',15,180,'1526012581647',74,'2018-05-11 11:23:01','2018-05-11 11:23:01'),(1,'linhxuan',5,180,'1526012658587',75,'2018-05-11 11:24:18','2018-05-11 11:24:18'),(1,'linhxuan',5,180,'1526012697138',76,'2018-05-11 11:24:57','2018-05-11 11:24:57'),(1,'linhxuan',1,180,'1526012859730',77,'2018-05-11 11:27:39','2018-05-11 11:27:39'),(1,'linhxuan',1,180,'1526013021647',78,'2018-05-11 11:30:21','2018-05-11 11:30:21'),(1,'linhxuan',2,180,'1526013041308',79,'2018-05-11 11:30:41','2018-05-11 11:30:41'),(1,'linhxuan',4,180,'1526013511446',80,'2018-05-11 11:38:31','2018-05-11 11:38:31'),(1,'linhxuan',1,180,'1526013625486',81,'2018-05-11 11:40:25','2018-05-11 11:40:25'),(1,'linhxuan',5,180,'1526013668073',82,'2018-05-11 11:41:08','2018-05-11 11:41:08'),(1,'linhxuan',1,180,'1526013862094',83,'2018-05-11 11:44:22','2018-05-11 11:44:22'),(1,'giangtd3',15,180,'1526637534577',84,'2018-05-18 16:58:54','2018-05-18 16:58:54'),(22,'linhtd',50,230,'1526637685647',85,'2018-05-18 17:01:25','2018-05-18 17:01:25'),(1,'linhtd',20,180,'1526648844111',86,'2018-05-18 20:07:24','2018-05-18 20:07:24'),(22,'linhtd',20,230,'1526648993007',87,'2018-05-18 20:09:53','2018-05-18 20:09:53'),(20,'linhtd',12,120,'1526653847164',88,'2018-05-18 21:30:47','2018-05-18 21:30:47'),(20,'linhtd',80,120,'1526653857055',89,'2018-05-18 21:30:57','2018-05-18 21:30:57'),(22,'nhongoc',10,230,'1526656759616',90,'2018-05-18 22:19:19','2018-05-18 22:19:19'),(22,'nhongoc',10,230,'1526656873286',91,'2018-05-18 22:21:13','2018-05-18 22:21:13'),(10,'nhongoc',3,50,'1526657607771',92,'2018-05-18 22:33:27','2018-05-18 22:33:27'),(10,'nhongoc',3,50,'1526657742738',93,'2018-05-18 22:35:42','2018-05-18 22:35:42'),(10,'nhongoc',3,50,'1526657990796',94,'2018-05-18 22:39:50','2018-05-18 22:39:50'),(10,'nhongoc',2,50,'1526658045146',95,'2018-05-18 22:40:45','2018-05-18 22:40:45'),(10,'linhtd',1,50,'1526658231018',96,'2018-05-18 22:43:51','2018-05-18 22:43:51'),(10,'nhongoc',1,50,'1526658278554',97,'2018-05-18 22:44:38','2018-05-18 22:44:38'),(10,'nhongoc',1,50,'1526658490837',98,'2018-05-18 22:48:10','2018-05-18 22:48:10'),(10,'nhongoc',1,50,'1526658609543',99,'2018-05-18 22:50:09','2018-05-18 22:50:09'),(10,'linhtd',1,50,'1526658652026',100,'2018-05-18 22:50:52','2018-05-18 22:50:52'),(10,'linhtd',1,50,'1526658783472',101,'2018-05-18 22:53:03','2018-05-18 22:53:03');
/*!40000 ALTER TABLE `historytree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `link_rolemenu`
--

DROP TABLE IF EXISTS `link_rolemenu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `link_rolemenu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_id` int(11) DEFAULT NULL,
  `rolecode` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `link_rolemenu`
--

LOCK TABLES `link_rolemenu` WRITE;
/*!40000 ALTER TABLE `link_rolemenu` DISABLE KEYS */;
INSERT INTO `link_rolemenu` VALUES (1,1,'CTV'),(2,2,'CTV'),(3,3,'CTV'),(4,4,'CTV');
/*!40000 ALTER TABLE `link_rolemenu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maptree`
--

DROP TABLE IF EXISTS `maptree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `maptree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data` json DEFAULT NULL,
  `note` text,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maptree`
--

LOCK TABLES `maptree` WRITE;
/*!40000 ALTER TABLE `maptree` DISABLE KEYS */;
INSERT INTO `maptree` VALUES (4,'{\"type\": \"Feature\", \"geometry\": {\"type\": \"Point\", \"coordinates\": [105.8184081315994, 20.99206399950472]}, \"properties\": {\"name\": \"a\", \"note\": \"aaaaaaaaaaaaaaa\"}}','s','sss'),(5,'{\"type\": \"Feature\", \"geometry\": {\"type\": \"Point\", \"coordinates\": [105.7221221923828, 20.97426314957793]}, \"properties\": {\"name\": \"c\", \"note\": \"c\"}}','c','c'),(6,'{\"type\": \"Feature\", \"geometry\": {\"type\": \"Point\", \"coordinates\": [105.84365844726562, 21.03644167976853]}, \"properties\": {\"name\": \"c\", \"note\": \"cccccc\"}}','','cz'),(7,'[{\"type\": \"Feature\", \"geometry\": {\"type\": \"Point\", \"coordinates\": [105.84287524223328, 21.006307158142935]}, \"properties\": {\"name\": \"Chanh đào\", \"note\": \"DA\"}}, {\"type\": \"Feature\", \"geometry\": {\"type\": \"Point\", \"coordinates\": [105.84317564964294, 21.00618196048995]}, \"properties\": {\"name\": \"Chanh đào\", \"note\": \"DC\"}}]','x','x'),(8,'{\"type\": \"Feature\", \"geometry\": {\"type\": \"Point\", \"coordinates\": [105.84204912185668, 21.00606177064424]}, \"properties\": {\"name\": \"Chanh đào\", \"note\": \"DA\", \"radius\": 84.36191616918555}}','xxx','xx'),(9,'[{\"type\": \"Feature\", \"geometry\": {\"type\": \"Point\", \"coordinates\": [105.84206521511078, 21.006507474169236]}, \"properties\": {\"name\": \"Bồ công anh\", \"note\": \"CA\"}}, {\"type\": \"Feature\", \"geometry\": {\"type\": \"Point\", \"coordinates\": [105.843186378479, 21.006151913037595]}, \"properties\": {\"name\": \"Bồ công anh\", \"note\": \"CC\"}}]','z','z');
/*!40000 ALTER TABLE `maptree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `namemenu` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `urlmenu` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `component` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,NULL,NULL,'Tìm cây','/search-tree',NULL),(2,NULL,NULL,'Danh sách cây','/list-tree',NULL),(3,NULL,NULL,'Thông báo','/notification',NULL),(4,NULL,NULL,'Liên hệ','/chats',NULL);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifi_tree`
--

DROP TABLE IF EXISTS `notifi_tree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifi_tree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) DEFAULT NULL,
  `data` json DEFAULT NULL,
  `room_id` varchar(45) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `url_ref` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifi_tree`
--

LOCK TABLES `notifi_tree` WRITE;
/*!40000 ALTER TABLE `notifi_tree` DISABLE KEYS */;
INSERT INTO `notifi_tree` VALUES (4,'use_tree','{\"id\": 39, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-04-15T14:09:56.000Z\", \"url_avatar\": \"images/user/linh.jpg\"}, \"tree_id\": 1, \"time_use\": \"1523938536401\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-17T04:15:36.403Z\", \"updatedAt\": \"2018-04-17T04:15:36.403Z\", \"water_use\": 5, \"waterneed\": 180}','1','1523938536515',NULL),(5,'use_tree','{\"id\": 41, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-04-15T14:09:56.000Z\", \"url_avatar\": \"images/user/linh.jpg\"}, \"tree_id\": 2, \"time_use\": \"1523943545341\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-17T05:39:05.346Z\", \"updatedAt\": \"2018-04-17T05:39:05.346Z\", \"water_use\": 1, \"waterneed\": 120}','2','1523943545393',NULL),(6,'use_tree','{\"id\": 42, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-04-15T14:09:56.000Z\", \"url_avatar\": \"images/user/linh.jpg\"}, \"tree_id\": 1, \"time_use\": \"1523943655097\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-17T05:40:55.098Z\", \"updatedAt\": \"2018-04-17T05:40:55.098Z\", \"water_use\": 10, \"waterneed\": 180}','1','1523943655174',NULL),(7,'use_tree','{\"id\": 43, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-04-15T14:09:56.000Z\", \"url_avatar\": \"images/user/linh.jpg\"}, \"tree_id\": 1, \"time_use\": \"1523981232234\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-17T16:07:12.239Z\", \"updatedAt\": \"2018-04-17T16:07:12.239Z\", \"water_use\": 1, \"waterneed\": 180}','1','1523981232272',NULL),(8,'use_tree','{\"id\": 44, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null}, \"tree_id\": 1, \"time_use\": \"1523981320490\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-17T16:08:40.491Z\", \"updatedAt\": \"2018-04-17T16:08:40.491Z\", \"water_use\": 1, \"waterneed\": 180}','1','1523981320520',NULL),(9,'use_tree','{\"id\": 45, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null}, \"tree_id\": 1, \"time_use\": \"1523981722124\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-17T16:15:22.125Z\", \"updatedAt\": \"2018-04-17T16:15:22.125Z\", \"water_use\": 1, \"waterneed\": 180}','1','1523981722168',NULL),(10,'use_tree','{\"id\": 46, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null}, \"tree_id\": 1, \"time_use\": \"1523986273371\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-17T17:31:13.371Z\", \"updatedAt\": \"2018-04-17T17:31:13.371Z\", \"water_use\": 11, \"waterneed\": 180}','1','1523986273429',NULL),(11,'use_tree','{\"id\": 47, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-04-15T14:09:56.000Z\", \"url_avatar\": \"images/user/linh.jpg\"}, \"tree_id\": 1, \"time_use\": \"1523986412621\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-17T17:33:32.622Z\", \"updatedAt\": \"2018-04-17T17:33:32.622Z\", \"water_use\": 10, \"waterneed\": 180}','1','1523986412685',NULL),(12,'use_tree','{\"id\": 48, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null}, \"tree_id\": 1, \"time_use\": \"1523986475924\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-17T17:34:35.925Z\", \"updatedAt\": \"2018-04-17T17:34:35.925Z\", \"water_use\": 1, \"waterneed\": 180}','1','1523986475979',NULL),(13,'use_tree','{\"id\": 49, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null}, \"tree_id\": 1, \"time_use\": \"1524058220592\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-18T13:30:20.603Z\", \"updatedAt\": \"2018-04-18T13:30:20.603Z\", \"water_use\": 10, \"waterneed\": 180}','1','1524058220659',NULL),(14,'use_tree','{\"id\": 50, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null}, \"tree_id\": 1, \"time_use\": \"1524058290201\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-18T13:31:30.208Z\", \"updatedAt\": \"2018-04-18T13:31:30.208Z\", \"water_use\": 10, \"waterneed\": 180}','1','1524058290272',NULL),(15,'use_tree','{\"id\": 51, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null}, \"tree_id\": 1, \"time_use\": \"1524058417795\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-18T13:33:37.803Z\", \"updatedAt\": \"2018-04-18T13:33:37.803Z\", \"water_use\": 10, \"waterneed\": 180}','1','1524058417857',NULL),(16,'use_tree','{\"id\": 52, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null}, \"tree_id\": 1, \"time_use\": \"1524058653746\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-18T13:37:33.756Z\", \"updatedAt\": \"2018-04-18T13:37:33.756Z\", \"water_use\": 10, \"waterneed\": 180}','1','1524058653810',NULL),(17,'use_tree','{\"id\": 53, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null}, \"tree_id\": 1, \"time_use\": \"1524058733185\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-18T13:38:53.194Z\", \"updatedAt\": \"2018-04-18T13:38:53.194Z\", \"water_use\": 10, \"waterneed\": 180}','1','1524058733241',NULL),(18,'use_tree','{\"id\": 54, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null}, \"tree_id\": 1, \"time_use\": \"1524058833884\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-18T13:40:33.890Z\", \"updatedAt\": \"2018-04-18T13:40:33.890Z\", \"water_use\": 10, \"waterneed\": 180}','1','1524058833958',NULL),(19,'use_tree','{\"id\": 55, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null}, \"tree_id\": 1, \"time_use\": \"1524058887695\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-18T13:41:27.703Z\", \"updatedAt\": \"2018-04-18T13:41:27.703Z\", \"water_use\": 10, \"waterneed\": 180}','1','1524058887760',NULL),(20,'use_tree','{\"id\": 56, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-04-15T14:09:56.000Z\", \"url_avatar\": \"images/user/linh.jpg\"}, \"tree_id\": 1, \"time_use\": \"1524063886272\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-18T15:04:46.273Z\", \"updatedAt\": \"2018-04-18T15:04:46.273Z\", \"water_use\": 1, \"waterneed\": 180}','1','1524063886305',NULL),(21,'use_tree','{\"id\": 57, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-04-15T14:09:56.000Z\", \"url_avatar\": \"images/user/linh.jpg\"}, \"tree_id\": 1, \"time_use\": \"1524063900061\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-18T15:05:00.062Z\", \"updatedAt\": \"2018-04-18T15:05:00.062Z\", \"water_use\": 12, \"waterneed\": 180}','1','1524063900113',NULL),(22,'use_tree','{\"id\": 58, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null}, \"tree_id\": 1, \"time_use\": \"1524063910525\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-18T15:05:10.526Z\", \"updatedAt\": \"2018-04-18T15:05:10.526Z\", \"water_use\": 3, \"waterneed\": 180}','1','1524063910580',NULL),(23,'use_tree','{\"id\": 59, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null}, \"tree_id\": 1, \"time_use\": \"1524068792739\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-18T16:26:32.740Z\", \"updatedAt\": \"2018-04-18T16:26:32.740Z\", \"water_use\": 3, \"waterneed\": 180}','1','1524068792904',NULL),(24,'use_tree','{\"id\": 60, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null}, \"tree_id\": 1, \"time_use\": \"1524068798204\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-18T16:26:38.205Z\", \"updatedAt\": \"2018-04-18T16:26:38.205Z\", \"water_use\": 3, \"waterneed\": 180}','1','1524068798281',NULL),(25,'use_tree','{\"id\": 61, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1524164996841\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-19T19:09:56.843Z\", \"updatedAt\": \"2018-04-19T19:09:56.843Z\", \"water_use\": 1, \"waterneed\": 180}','1','1524164996921',NULL),(26,'use_tree','{\"id\": 62, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1524193885955\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-20T03:11:25.957Z\", \"updatedAt\": \"2018-04-20T03:11:25.957Z\", \"water_use\": 5, \"waterneed\": 180}','1','1524193886018',NULL),(27,'use_tree','{\"id\": 63, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1524194609414\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-20T03:23:29.416Z\", \"updatedAt\": \"2018-04-20T03:23:29.416Z\", \"water_use\": 1, \"waterneed\": 180}','1','1524194609500',NULL),(28,'use_tree','{\"id\": 64, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1524194617010\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-20T03:23:37.010Z\", \"updatedAt\": \"2018-04-20T03:23:37.010Z\", \"water_use\": 1, \"waterneed\": 180}','1','1524194617056',NULL),(29,'use_tree','{\"id\": 65, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1524194708663\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-20T03:25:08.668Z\", \"updatedAt\": \"2018-04-20T03:25:08.668Z\", \"water_use\": 1, \"waterneed\": 180}','1','1524194708742',NULL),(30,'use_tree','{\"id\": 66, \"user\": {\"id\": 9, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": null, \"birthday\": null, \"fullname\": \"Ngọc thị Nguyễn\", \"rolecode\": \"PM\", \"rolename\": \"Quản lý\", \"username\": \"nhongoc\", \"createdAt\": \"2018-04-12T07:07:23.000Z\", \"updatedAt\": \"2018-04-23T17:12:27.000Z\", \"url_avatar\": \"images/user/ngoc.jpg\", \"number_notifi\": 0}, \"tree_id\": 20, \"time_use\": \"1524636980763\", \"username\": \"nhongoc\", \"createdAt\": \"2018-04-25T06:16:20.765Z\", \"updatedAt\": \"2018-04-25T06:16:20.765Z\", \"water_use\": 10, \"waterneed\": 120}','20','1524636980827',NULL),(31,'use_tree','{\"id\": 67, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-05-04T06:06:08.000Z\", \"url_avatar\": \"images/user/linh.jpg\", \"number_notifi\": 0}, \"tree_id\": 1, \"time_use\": \"1525415237549\", \"username\": \"linhtd\", \"createdAt\": \"2018-05-04T06:27:17.551Z\", \"updatedAt\": \"2018-05-04T06:27:17.551Z\", \"water_use\": 15, \"waterneed\": 180}','1','1525415237602',NULL),(32,'use_tree','{\"id\": 68, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-05-04T06:06:08.000Z\", \"url_avatar\": \"images/user/linh.jpg\", \"number_notifi\": 0}, \"tree_id\": 24, \"time_use\": \"1525415469871\", \"username\": \"linhtd\", \"createdAt\": \"2018-05-04T06:31:09.874Z\", \"updatedAt\": \"2018-05-04T06:31:09.874Z\", \"water_use\": 15, \"waterneed\": 50}','24','1525415469929',NULL),(33,'use_tree','{\"id\": 69, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-05-04T06:34:45.000Z\", \"url_avatar\": \"images/user/linh.jpg\", \"number_notifi\": 0}, \"tree_id\": 1, \"time_use\": \"1525417635898\", \"username\": \"linhtd\", \"createdAt\": \"2018-05-04T07:07:15.899Z\", \"updatedAt\": \"2018-05-04T07:07:15.899Z\", \"water_use\": 1, \"waterneed\": 180}','1','1525417635945',NULL),(34,'use_tree','{\"id\": 70, \"user\": {\"id\": null, \"sex\": null, \"status\": \"Hoạt động\", \"address\": null, \"birthday\": null, \"fullname\": null, \"rolecode\": \"SS\", \"rolename\": \"Nhân viên\", \"username\": \"phuonganh1\", \"createdAt\": \"2018-04-13T05:31:14.000Z\", \"updatedAt\": \"2018-04-13T05:31:14.000Z\", \"url_avatar\": \"images/user/phuonganh.jpg\", \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1525417682453\", \"username\": \"phuonganh1\", \"createdAt\": \"2018-05-04T07:08:02.454Z\", \"updatedAt\": \"2018-05-04T07:08:02.454Z\", \"water_use\": 10, \"waterneed\": 180}','1','1525417682505',NULL),(35,'use_tree','{\"id\": 72, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1526012209302\", \"username\": \"linhxuan\", \"createdAt\": \"2018-05-11T04:16:49.306Z\", \"updatedAt\": \"2018-05-11T04:16:49.306Z\", \"water_use\": 1, \"waterneed\": 180}','1','1526012209353','treedetail.1.html'),(36,'use_tree','{\"id\": 73, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1526012384138\", \"username\": \"linhxuan\", \"createdAt\": \"2018-05-11T04:19:44.145Z\", \"updatedAt\": \"2018-05-11T04:19:44.145Z\", \"water_use\": 10, \"waterneed\": 180}','1','1526012384181','treedetail.1.html'),(37,'use_tree','{\"id\": 74, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1526012581647\", \"username\": \"linhxuan\", \"createdAt\": \"2018-05-11T04:23:01.648Z\", \"updatedAt\": \"2018-05-11T04:23:01.648Z\", \"water_use\": 15, \"waterneed\": 180}','1','1526012581728','treedetail.1.html'),(38,'use_tree','{\"id\": 75, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1526012658587\", \"username\": \"linhxuan\", \"createdAt\": \"2018-05-11T04:24:18.588Z\", \"updatedAt\": \"2018-05-11T04:24:18.588Z\", \"water_use\": 5, \"waterneed\": 180}','1','1526012658631','treedetail.1.html'),(39,'use_tree','{\"id\": 76, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1526012697138\", \"username\": \"linhxuan\", \"createdAt\": \"2018-05-11T04:24:57.140Z\", \"updatedAt\": \"2018-05-11T04:24:57.140Z\", \"water_use\": 5, \"waterneed\": 180}','1','1526012697193','treedetail.1.html'),(40,'use_tree','{\"id\": 77, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1526012859730\", \"username\": \"linhxuan\", \"createdAt\": \"2018-05-11T04:27:39.731Z\", \"updatedAt\": \"2018-05-11T04:27:39.731Z\", \"water_use\": 1, \"waterneed\": 180}','1','1526012859838','treedetail.1.html'),(41,'use_tree','{\"id\": 78, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1526013021647\", \"username\": \"linhxuan\", \"createdAt\": \"2018-05-11T04:30:21.648Z\", \"updatedAt\": \"2018-05-11T04:30:21.648Z\", \"water_use\": 1, \"waterneed\": 180}','1','1526013021733','treedetail.1.html'),(42,'use_tree','{\"id\": 79, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1526013041308\", \"username\": \"linhxuan\", \"createdAt\": \"2018-05-11T04:30:41.309Z\", \"updatedAt\": \"2018-05-11T04:30:41.309Z\", \"water_use\": 2, \"waterneed\": 180}','1','1526013041362','treedetail.1.html'),(43,'use_tree','{\"id\": 80, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1526013511446\", \"username\": \"linhxuan\", \"createdAt\": \"2018-05-11T04:38:31.448Z\", \"updatedAt\": \"2018-05-11T04:38:31.448Z\", \"water_use\": 4, \"waterneed\": 180}','1','1526013511506','treedetail.1.html'),(44,'use_tree','{\"id\": 81, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1526013625486\", \"username\": \"linhxuan\", \"createdAt\": \"2018-05-11T04:40:25.487Z\", \"updatedAt\": \"2018-05-11T04:40:25.487Z\", \"water_use\": 1, \"waterneed\": 180}','1','1526013625541','treedetail.1.html'),(45,'use_tree','{\"id\": 82, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1526013668073\", \"username\": \"linhxuan\", \"createdAt\": \"2018-05-11T04:41:08.074Z\", \"updatedAt\": \"2018-05-11T04:41:08.074Z\", \"water_use\": 5, \"waterneed\": 180}','1','1526013668105','treedetail.1.html'),(46,'use_tree','{\"id\": 83, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": \"aaa\", \"birthday\": null, \"fullname\": \"Xuân linh\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhxuan\", \"createdAt\": \"2018-04-16T17:34:06.000Z\", \"updatedAt\": \"2018-04-16T17:34:06.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1526013862094\", \"username\": \"linhxuan\", \"createdAt\": \"2018-05-11T04:44:22.094Z\", \"updatedAt\": \"2018-05-11T04:44:22.094Z\", \"water_use\": 1, \"waterneed\": 180}','1','1526013862176','treedetail.1.html'),(47,'use_tree','{\"id\": 84, \"user\": {\"id\": null, \"sex\": \"\", \"status\": \"Hoạt động\", \"address\": null, \"birthday\": null, \"fullname\": \"\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"giangtd3\", \"createdAt\": \"2018-05-18T09:57:57.000Z\", \"updatedAt\": \"2018-05-18T09:57:57.000Z\", \"url_avatar\": null, \"number_notifi\": null}, \"tree_id\": 1, \"time_use\": \"1526637534577\", \"username\": \"giangtd3\", \"createdAt\": \"2018-05-18T09:58:54.578Z\", \"updatedAt\": \"2018-05-18T09:58:54.578Z\", \"water_use\": 15, \"waterneed\": 180}','1','1526637534616','treedetail.1.html'),(48,'use_tree','{\"id\": 85, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-05-18T09:58:54.000Z\", \"url_avatar\": \"images/user/linh.jpg\", \"number_notifi\": 1}, \"tree_id\": 22, \"time_use\": \"1526637685647\", \"username\": \"linhtd\", \"createdAt\": \"2018-05-18T10:01:25.650Z\", \"updatedAt\": \"2018-05-18T10:01:25.650Z\", \"water_use\": 50, \"waterneed\": 230}','22','1526637685724','treedetail.22.html'),(49,'use_tree','{\"id\": 86, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-05-18T10:02:16.000Z\", \"url_avatar\": \"images/user/linh.jpg\", \"number_notifi\": 0}, \"tree_id\": 1, \"time_use\": \"1526648844111\", \"username\": \"linhtd\", \"createdAt\": \"2018-05-18T13:07:24.118Z\", \"updatedAt\": \"2018-05-18T13:07:24.118Z\", \"water_use\": 20, \"waterneed\": 180}','1','1526648844157','treedetail.1.html'),(50,'use_tree','{\"id\": 87, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-05-18T10:02:16.000Z\", \"url_avatar\": \"images/user/linh.jpg\", \"number_notifi\": 0}, \"tree_id\": 22, \"time_use\": \"1526648993007\", \"username\": \"linhtd\", \"createdAt\": \"2018-05-18T13:09:53.008Z\", \"updatedAt\": \"2018-05-18T13:09:53.008Z\", \"water_use\": 20, \"waterneed\": 230}','22','1526648993042','treedetail.22.html'),(51,'use_tree','{\"id\": 88, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-05-18T13:18:35.000Z\", \"url_avatar\": \"images/user/linh.jpg\", \"number_notifi\": 0}, \"tree_id\": 20, \"time_use\": \"1526653847164\", \"username\": \"linhtd\", \"createdAt\": \"2018-05-18T14:30:47.168Z\", \"updatedAt\": \"2018-05-18T14:30:47.168Z\", \"water_use\": 12, \"waterneed\": 120}','20','1526653847212','treedetail.20.html'),(52,'use_tree','{\"id\": 89, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-05-18T13:18:35.000Z\", \"url_avatar\": \"images/user/linh.jpg\", \"number_notifi\": 0}, \"tree_id\": 20, \"time_use\": \"1526653857055\", \"username\": \"linhtd\", \"createdAt\": \"2018-05-18T14:30:57.056Z\", \"updatedAt\": \"2018-05-18T14:30:57.056Z\", \"water_use\": 80, \"waterneed\": 120}','20','1526653857107','treedetail.20.html'),(53,'use_tree','{\"id\": 90, \"user\": {\"id\": 9, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": null, \"birthday\": null, \"fullname\": \"Ngọc thị Nguyễn\", \"rolecode\": \"PM\", \"rolename\": \"Quản lý\", \"username\": \"nhongoc\", \"createdAt\": \"2018-04-12T07:07:23.000Z\", \"updatedAt\": \"2018-05-11T03:53:12.000Z\", \"url_avatar\": \"images/user/ngoc.jpg\", \"number_notifi\": 0}, \"tree_id\": 22, \"time_use\": \"1526656759616\", \"username\": \"nhongoc\", \"createdAt\": \"2018-05-18T15:19:19.622Z\", \"updatedAt\": \"2018-05-18T15:19:19.622Z\", \"water_use\": 10, \"waterneed\": 230}','22','1526656759690','treedetail.22.html'),(54,'use_tree','{\"id\": 91, \"user\": {\"id\": 9, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": null, \"birthday\": null, \"fullname\": \"Ngọc thị Nguyễn\", \"rolecode\": \"PM\", \"rolename\": \"Quản lý\", \"username\": \"nhongoc\", \"createdAt\": \"2018-04-12T07:07:23.000Z\", \"updatedAt\": \"2018-05-11T03:53:12.000Z\", \"url_avatar\": \"images/user/ngoc.jpg\", \"number_notifi\": 0}, \"tree_id\": 22, \"time_use\": \"1526656873286\", \"username\": \"nhongoc\", \"createdAt\": \"2018-05-18T15:21:13.287Z\", \"updatedAt\": \"2018-05-18T15:21:13.287Z\", \"water_use\": 10, \"waterneed\": 230}','22','1526656873378','treedetail.22.html'),(55,'use_tree','{\"id\": 92, \"user\": {\"id\": 9, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": null, \"birthday\": null, \"fullname\": \"Ngọc thị Nguyễn\", \"rolecode\": \"PM\", \"rolename\": \"Quản lý\", \"username\": \"nhongoc\", \"createdAt\": \"2018-04-12T07:07:23.000Z\", \"updatedAt\": \"2018-05-11T03:53:12.000Z\", \"url_avatar\": \"images/user/ngoc.jpg\", \"number_notifi\": 0}, \"tree_id\": 10, \"time_use\": \"1526657607771\", \"username\": \"nhongoc\", \"createdAt\": \"2018-05-18T15:33:27.772Z\", \"updatedAt\": \"2018-05-18T15:33:27.772Z\", \"water_use\": 3, \"waterneed\": 50}','10','1526657607811','treedetail.10.html'),(56,'use_tree','{\"id\": 93, \"user\": {\"id\": 9, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": null, \"birthday\": null, \"fullname\": \"Ngọc thị Nguyễn\", \"rolecode\": \"PM\", \"rolename\": \"Quản lý\", \"username\": \"nhongoc\", \"createdAt\": \"2018-04-12T07:07:23.000Z\", \"updatedAt\": \"2018-05-11T03:53:12.000Z\", \"url_avatar\": \"images/user/ngoc.jpg\", \"number_notifi\": 0}, \"tree_id\": 10, \"time_use\": \"1526657742738\", \"username\": \"nhongoc\", \"createdAt\": \"2018-05-18T15:35:42.739Z\", \"updatedAt\": \"2018-05-18T15:35:42.739Z\", \"water_use\": 3, \"waterneed\": 50}','10','1526657742842','treedetail.10.html'),(57,'use_tree','{\"id\": 94, \"user\": {\"id\": 9, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": null, \"birthday\": null, \"fullname\": \"Ngọc thị Nguyễn\", \"rolecode\": \"PM\", \"rolename\": \"Quản lý\", \"username\": \"nhongoc\", \"createdAt\": \"2018-04-12T07:07:23.000Z\", \"updatedAt\": \"2018-05-11T03:53:12.000Z\", \"url_avatar\": \"images/user/ngoc.jpg\", \"number_notifi\": 0}, \"tree_id\": 10, \"time_use\": \"1526657990796\", \"username\": \"nhongoc\", \"createdAt\": \"2018-05-18T15:39:50.796Z\", \"updatedAt\": \"2018-05-18T15:39:50.796Z\", \"water_use\": 3, \"waterneed\": 50}','10','1526657990853','treedetail.10.html'),(58,'use_tree','{\"id\": 95, \"user\": {\"id\": 9, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": null, \"birthday\": null, \"fullname\": \"Ngọc thị Nguyễn\", \"rolecode\": \"PM\", \"rolename\": \"Quản lý\", \"username\": \"nhongoc\", \"createdAt\": \"2018-04-12T07:07:23.000Z\", \"updatedAt\": \"2018-05-11T03:53:12.000Z\", \"url_avatar\": \"images/user/ngoc.jpg\", \"number_notifi\": 0}, \"tree_id\": 10, \"time_use\": \"1526658045146\", \"username\": \"nhongoc\", \"createdAt\": \"2018-05-18T15:40:45.146Z\", \"updatedAt\": \"2018-05-18T15:40:45.146Z\", \"water_use\": 2, \"waterneed\": 50}','10','1526658045186','treedetail.10.html'),(59,'use_tree','{\"id\": 96, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-05-18T15:35:43.000Z\", \"url_avatar\": \"images/user/linh.jpg\", \"number_notifi\": 1}, \"tree_id\": 10, \"time_use\": \"1526658231018\", \"username\": \"linhtd\", \"createdAt\": \"2018-05-18T15:43:51.019Z\", \"updatedAt\": \"2018-05-18T15:43:51.019Z\", \"water_use\": 1, \"waterneed\": 50}','10','1526658231131','treedetail.10.html'),(60,'use_tree','{\"id\": 97, \"user\": {\"id\": 9, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": null, \"birthday\": null, \"fullname\": \"Ngọc thị Nguyễn\", \"rolecode\": \"PM\", \"rolename\": \"Quản lý\", \"username\": \"nhongoc\", \"createdAt\": \"2018-04-12T07:07:23.000Z\", \"updatedAt\": \"2018-05-11T03:53:12.000Z\", \"url_avatar\": \"images/user/ngoc.jpg\", \"number_notifi\": 0}, \"tree_id\": 10, \"time_use\": \"1526658278554\", \"username\": \"nhongoc\", \"createdAt\": \"2018-05-18T15:44:38.554Z\", \"updatedAt\": \"2018-05-18T15:44:38.554Z\", \"water_use\": 1, \"waterneed\": 50}','10','1526658278621','treedetail.10.html'),(61,'use_tree','{\"id\": 98, \"user\": {\"id\": 9, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": null, \"birthday\": null, \"fullname\": \"Ngọc thị Nguyễn\", \"rolecode\": \"PM\", \"rolename\": \"Quản lý\", \"username\": \"nhongoc\", \"createdAt\": \"2018-04-12T07:07:23.000Z\", \"updatedAt\": \"2018-05-11T03:53:12.000Z\", \"url_avatar\": \"images/user/ngoc.jpg\", \"number_notifi\": 0}, \"tree_id\": 10, \"time_use\": \"1526658490837\", \"username\": \"nhongoc\", \"createdAt\": \"2018-05-18T15:48:10.840Z\", \"updatedAt\": \"2018-05-18T15:48:10.840Z\", \"water_use\": 1, \"waterneed\": 50}','10','1526658490889','treedetail.10.html'),(62,'use_tree','{\"id\": 99, \"user\": {\"id\": 9, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": null, \"birthday\": null, \"fullname\": \"Ngọc thị Nguyễn\", \"rolecode\": \"PM\", \"rolename\": \"Quản lý\", \"username\": \"nhongoc\", \"createdAt\": \"2018-04-12T07:07:23.000Z\", \"updatedAt\": \"2018-05-11T03:53:12.000Z\", \"url_avatar\": \"images/user/ngoc.jpg\", \"number_notifi\": 0}, \"tree_id\": 10, \"time_use\": \"1526658609543\", \"username\": \"nhongoc\", \"createdAt\": \"2018-05-18T15:50:09.544Z\", \"updatedAt\": \"2018-05-18T15:50:09.544Z\", \"water_use\": 1, \"waterneed\": 50}','10','1526658609583','treedetail.10.html'),(63,'use_tree','{\"id\": 100, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-05-18T15:35:43.000Z\", \"url_avatar\": \"images/user/linh.jpg\", \"number_notifi\": 1}, \"tree_id\": 10, \"time_use\": \"1526658652026\", \"username\": \"linhtd\", \"createdAt\": \"2018-05-18T15:50:52.027Z\", \"updatedAt\": \"2018-05-18T15:50:52.027Z\", \"water_use\": 1, \"waterneed\": 50}','10','1526658652075','treedetail.10.html'),(64,'use_tree','{\"id\": 101, \"user\": {\"id\": 6, \"sex\": \"tn\", \"status\": \"Hoạt động\", \"address\": \"Ngã tư sở\", \"birthday\": \"\", \"fullname\": \"Trịnh Đức Bảo Linh123\", \"rolecode\": \"CTV\", \"rolename\": \"Cộng tác viên\", \"username\": \"linhtd\", \"createdAt\": \"2018-04-12T06:39:29.000Z\", \"updatedAt\": \"2018-05-18T15:35:43.000Z\", \"url_avatar\": \"images/user/linh.jpg\", \"number_notifi\": 1}, \"tree_id\": 10, \"time_use\": \"1526658783472\", \"username\": \"linhtd\", \"createdAt\": \"2018-05-18T15:53:03.472Z\", \"updatedAt\": \"2018-05-18T15:53:03.472Z\", \"water_use\": 1, \"waterneed\": 50}','10','1526658783541','treedetail.10.html');
/*!40000 ALTER TABLE `notifi_tree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `number_notifi`
--

DROP TABLE IF EXISTS `number_notifi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `number_notifi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `number_notifi` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `number_notifi`
--

LOCK TABLES `number_notifi` WRITE;
/*!40000 ALTER TABLE `number_notifi` DISABLE KEYS */;
/*!40000 ALTER TABLE `number_notifi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `rolecode` varchar(255) DEFAULT NULL,
  `rolename` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES ('SS','Nhân viên','Tuoi cay',1,NULL,NULL),('PM','Quản lý','',7,NULL,NULL),('CTV','Cộng tác viên','Tuoi cay',8,NULL,NULL);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('5GKHMpf-A7u-JJr5UffXEvIYccWNTF6O',1526746844,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"linhtd\",\"fullname\":\"Trịnh Đức Bảo Linh123\",\"address\":\"Ngã tư sở\",\"rolecode\":\"CTV\",\"sex\":\"tn\",\"status\":\"Hoạt động\",\"birthday\":\"\",\"number_notifi\":0,\"url_avatar\":\"images/user/linh.jpg\",\"id\":6,\"createdAt\":\"2018-04-12T06:39:29.000Z\",\"updatedAt\":\"2018-05-18T13:18:35.000Z\",\"rolename\":\"Cộng tác viên\"}}'),('BBKZqIeBG9GMM89Z6UAZcGYZaGLMDdhN',1526747547,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"linhtd\",\"fullname\":\"Trịnh Đức Bảo Linh123\",\"address\":\"Ngã tư sở\",\"rolecode\":\"CTV\",\"sex\":\"tn\",\"status\":\"Hoạt động\",\"birthday\":\"\",\"number_notifi\":0,\"url_avatar\":\"images/user/linh.jpg\",\"id\":6,\"createdAt\":\"2018-04-12T06:39:29.000Z\",\"updatedAt\":\"2018-05-18T16:27:12.000Z\",\"rolename\":\"Cộng tác viên\"}}'),('NVYmosdGtc7NAa1F-LpTyR26a7q9BMVx',1526738469,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"nhongoc\",\"fullname\":\"Ngọc thị Nguyễn\",\"address\":null,\"rolecode\":\"PM\",\"sex\":\"tn\",\"status\":\"Hoạt động\",\"birthday\":null,\"number_notifi\":0,\"url_avatar\":\"images/user/ngoc.jpg\",\"id\":9,\"createdAt\":\"2018-04-12T07:07:23.000Z\",\"updatedAt\":\"2018-05-18T11:51:21.000Z\",\"rolename\":\"Quản lý\"}}'),('OYRLjGqTQIcM38EVgZ06LsGCmuECnUW0',1526747468,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"nhongoc\",\"fullname\":\"Ngọc thị Nguyễn\",\"address\":null,\"rolecode\":\"PM\",\"sex\":\"tn\",\"status\":\"Hoạt động\",\"birthday\":null,\"number_notifi\":0,\"url_avatar\":\"images/user/ngoc.jpg\",\"id\":9,\"createdAt\":\"2018-04-12T07:07:23.000Z\",\"updatedAt\":\"2018-05-18T15:49:54.000Z\",\"rolename\":\"Quản lý\"}}'),('Ua780WZ2JfsJC631yRmUqt8D5g_YvKkO',1526738439,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('eEHEBHNVrCreetbNqbg94oQp05fBa1kL',1526737227,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('ejAo_5BOAJCRxEUyo3M3lEyf2euqAAjf',1526737971,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('gMF4MtZA3j0xfqKywZvceaTUtq7PoJEV',1526735971,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"nhongoc\",\"fullname\":\"Ngọc thị Nguyễn\",\"address\":null,\"rolecode\":\"PM\",\"sex\":\"tn\",\"status\":\"Hoạt động\",\"birthday\":null,\"number_notifi\":0,\"url_avatar\":\"images/user/ngoc.jpg\",\"id\":9,\"createdAt\":\"2018-04-12T07:07:23.000Z\",\"updatedAt\":\"2018-05-18T11:51:21.000Z\",\"rolename\":\"Quản lý\"}}'),('ijIo6sxXHGxtVlmBds7gzkXJ_wuK6sdK',1526745010,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"nhongoc\",\"fullname\":\"Ngọc thị Nguyễn\",\"address\":null,\"rolecode\":\"PM\",\"sex\":\"tn\",\"status\":\"Hoạt động\",\"birthday\":null,\"number_notifi\":0,\"url_avatar\":\"images/user/ngoc.jpg\",\"id\":9,\"createdAt\":\"2018-04-12T07:07:23.000Z\",\"updatedAt\":\"2018-05-11T03:53:12.000Z\",\"rolename\":\"Quản lý\"}}'),('kW1rx3c-yQAYUXEbsq0eVyJMQGDrNCmo',1526747355,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"a\",\"fullname\":null,\"address\":null,\"rolecode\":null,\"sex\":null,\"status\":null,\"birthday\":null,\"number_notifi\":null,\"url_avatar\":null,\"id\":null,\"createdAt\":\"2018-04-19T09:10:23.000Z\",\"updatedAt\":\"2018-04-19T09:10:23.000Z\",\"rolename\":\"Nhân viên\",\"encryptedPassword\":\"$2b$10$lAysCNxir8tma6pdSmzcG.eol52W/ngkRvIKIE3OKIh6MogpFZXxy\"}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscribe_tree`
--

DROP TABLE IF EXISTS `subscribe_tree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subscribe_tree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `room_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscribe_tree`
--

LOCK TABLES `subscribe_tree` WRITE;
/*!40000 ALTER TABLE `subscribe_tree` DISABLE KEYS */;
INSERT INTO `subscribe_tree` VALUES (4,'linhtd','1523933258295','3'),(5,'linhxuan','1523936515211','1'),(6,'duongbc08','1524063824282','1'),(8,'linhtd','1525417594096','2'),(9,'linhtd','1525417605457','1'),(10,'giangtd3','1526637508186','1'),(11,'linhtd','1526655815355','4'),(12,'linhtd','1526657534488','10'),(13,'linhtd','1526657973026','10');
/*!40000 ALTER TABLE `subscribe_tree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tree`
--

DROP TABLE IF EXISTS `tree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tree` (
  `grouptree_id` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `waternow` int(11) DEFAULT NULL,
  `waterneed` int(11) DEFAULT NULL,
  `url_image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `begindate` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `username_user` varchar(45) DEFAULT NULL,
  `time_user_use` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tree`
--

LOCK TABLES `tree` WRITE;
/*!40000 ALTER TABLE `tree` DISABLE KEYS */;
INSERT INTO `tree` VALUES ('1','AA','Tốt',655,180,'images/tree/khe.jpg','1','2014-4-13',1,NULL,'2018-05-18 23:27:11',NULL,NULL),('1','AB','Kém',51,120,'images/tree/khe.jpg','','2012-6-21',2,NULL,'2018-05-18 23:27:11',NULL,NULL),('1','AC','Kém',40,90,'images/tree/khe.jpg',NULL,'2015-10-25',3,NULL,'2018-05-18 23:27:11',NULL,NULL),('2','BA','Tốt',90,70,'images/tree/bang.jpg',NULL,'2012-12-23',4,NULL,'2018-05-18 23:27:11',NULL,NULL),('2','BB','Tốt',80,100,'images/tree/bang.jpg',NULL,'2017-9-12',5,NULL,'2018-05-18 23:27:11',NULL,NULL),('2','BC','Trung bình',90,140,'images/tree/bang.jpg',NULL,'2016-3-30',6,NULL,'2018-05-18 23:27:11',NULL,NULL),('3','CA','Kém',40,90,'images/tree/bo-cong-anh.jpg',NULL,'2013-12-24',7,NULL,'2018-05-18 23:27:11',NULL,NULL),('3','CB','Trung bình',80,120,'images/tree/bo-cong-anh.jpg',NULL,'2011-2-24',8,NULL,'2018-05-18 23:27:11',NULL,NULL),('3','CC','Trung bình',20,30,'images/tree/bo-cong-anh.jpg',NULL,'2016-11-24',9,NULL,'2018-05-18 23:27:11',NULL,NULL),('4','DA','Tốt',47,50,'images/tree/chanh-dao.jpg',NULL,'2010-8-29',10,NULL,'2018-05-18 23:27:11',NULL,NULL),('4','DB','Trung bình',10,20,'images/tree/chanh-dao.jpg',NULL,'2010-5-18',11,NULL,'2018-05-18 23:27:11',NULL,NULL),('4','DC','Kém',50,130,'images/tree/chanh-dao.jpg',NULL,'2012-9-17',12,NULL,'2018-05-18 23:27:11',NULL,NULL),('5','EA','Kém',50,110,'images/tree/co.jpg',NULL,'2018-1-1',13,NULL,'2018-05-18 23:27:11',NULL,NULL),('5','EB','Kém',80,210,'images/tree/co.jpg',NULL,'2017-12-29',14,NULL,'2018-05-18 23:27:11',NULL,NULL),('5','EC','Tốt',30,40,'images/tree/co.jpg',NULL,'2008-12-28',15,NULL,'2018-05-18 23:27:11',NULL,NULL),('6','FA','Tốt',52,60,'images/tree/cuc.jpg',NULL,'2009-4-5',16,NULL,'2018-05-18 23:27:11',NULL,NULL),('6','FB','Trung bình',20,40,'images/tree/cuc.jpg',NULL,'2003-9-10',17,NULL,'2018-05-18 23:27:11',NULL,NULL),('6','FC','Kém',40,90,'images/tree/cuc.jpg',NULL,'2007-6-12',18,NULL,'2018-05-18 23:27:11',NULL,NULL),('7','GA','Tốt',80,80,'images/tree/dao.jpg',NULL,'2009-8-1',19,NULL,'2018-05-18 23:27:11',NULL,NULL),('7','GB','Tốt',132,120,'images/tree/dao.jpg',NULL,'2010-7-16',20,NULL,'2018-05-18 23:27:11',NULL,NULL),('7','GC','Tốt',50,50,'images/tree/dao.jpg',NULL,'2009-4-12',21,NULL,'2018-05-18 23:27:11',NULL,NULL),('8','HA','Tốt',180,230,'images/tree/dua-canh.jpg',NULL,'2013-5-20',22,NULL,'2018-05-18 23:27:11',NULL,NULL),('8','HB','Tốt',30,40,'images/tree/dua-canh.jpg',NULL,'2016-9-12',23,NULL,'2018-05-18 23:27:11',NULL,NULL),('8','HC','Tốt',45,50,'images/tree/dua-canh.jpg',NULL,'2016-10-23',24,NULL,'2018-05-18 23:27:11',NULL,NULL),('1','CVV','Kém',0,200,NULL,'ddddddddđd',NULL,25,'2018-05-18 17:05:43','2018-05-18 23:27:11',NULL,NULL);
/*!40000 ALTER TABLE `tree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `username` varchar(255) NOT NULL,
  `encryptedPassword` varchar(255) DEFAULT NULL,
  `id` int(10) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `fullname` varchar(45) DEFAULT NULL,
  `birthday` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `sex` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `url_avatar` varchar(45) DEFAULT NULL,
  `rolecode` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `number_notifi` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('aaaaaaaa','$2b$10$fPY7WovN8JdR7WsU00riRepMxFMkLIwsaGfAAb0Qi5s.ZJsKaEGgW',NULL,'2018-04-20 13:40:59','2018-04-20 13:40:59',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('adddddđaa','$2b$10$asieDZWaaRZfI7GBgiCTg.g3wU26tWShgOgo1.hzj.4OlGre6wt3y',NULL,'2018-04-20 13:47:33','2018-04-20 13:47:33',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('duongbc08','$2b$10$ZBqdRynveltzZpQ15qtWC.ivm7.w8raxIOaBZ7utb/GHtFBcN3FW.',NULL,'2018-04-18 22:02:38','2018-04-18 22:02:38',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Hoạt động',NULL),('giangtd','$2b$10$k/xgAyMpfWO3RV2TbHn1/Od12pD0KgnaE4qx85LehgG/IPtBcAIWi',8,'2018-04-12 13:44:45','2018-04-12 13:44:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Đóng',NULL),('giangtd3','$2b$10$BG5pjs5kQeD61vZTP5ZHbO0TwOTtcA03UD9J0eDYlBY5Jm/hStQsq',NULL,'2018-05-18 16:57:57','2018-05-18 16:59:33','trịnh giang',NULL,NULL,'tn',NULL,NULL,'CTV','Hoạt động',NULL),('linh',NULL,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('linhtd','$2b$10$quUXQYRCV2DDLgtHdVyPMet70EQ0erJHPojK6ZrrPpQLHPTrY1l0y',6,'2018-04-12 13:39:29','2018-05-18 23:27:12','Trịnh Đức Bảo Linh123','','Ngã tư sở','tn',NULL,'images/user/linh.jpg','CTV','Hoạt động',0),('linhtd1','$2b$10$x10pd/F1rD6J4bm2LVFY6.jHgBrvVkM4dm3kZzdcDfqJlD77ejJlq',NULL,'2018-05-04 10:53:27','2018-05-04 10:53:27','Linh vui tính',NULL,NULL,'tn',NULL,NULL,'CTV','Hoạt động',NULL),('linhtd2','$2b$10$C/jswuup6JKKf4DwSBkK1.ZgItlgk9tZjbC/ALWtW69qQ69UixacO',NULL,'2018-05-04 10:48:40','2018-05-04 10:48:40',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('linhxuan','$2b$10$V9NAZN9IRIQmeP6hfh/zee4LJv7tXrCHJqsy/1hdLIeCDzy6SUuHO',NULL,'2018-04-17 00:34:06','2018-04-17 00:34:06','Xuân linh',NULL,'aaa','',NULL,NULL,'CTV','Hoạt động',NULL),('ngoc',NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('nhongoc','$2b$10$07ksbC2vvipUHKYVrRJCaegqCa9A2F92g7BgYf7qxH5djTj8wfvHu',9,'2018-04-12 14:07:23','2018-05-18 22:49:54','Ngọc thị Nguyễn',NULL,NULL,'tn',NULL,'images/user/ngoc.jpg','PM','Hoạt động',0),('phuonganh',NULL,3,NULL,'2018-04-20 10:14:27','Phương Anh',NULL,NULL,NULL,NULL,NULL,'PM','Hoạt động',NULL),('phuonganh1','$2b$10$LnfWLde5x5XtCJIVWTkw6.5/8nggQZySD0JmGXn1GcFsB/00hRbkq',NULL,'2018-04-13 12:31:14','2018-05-18 20:52:52','Phương  Anh',NULL,NULL,'tn',NULL,'images/user/phuonganh.jpg','SS ','Hoạt động',NULL),('terry',NULL,4,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Terry123','$2b$10$2MnBSk4eY5.nCX9ObuRL/Ok/etJA5ysQ3Dr7MKuxb931K9tNQOwPy',NULL,'2018-05-04 13:16:47','2018-05-04 13:16:47','Samrit Sotheary',NULL,NULL,'tn',NULL,NULL,'CTV','Hoạt động',NULL),('Trananh','$2b$10$yJBNMdlXcLIHK21KYTibt.CxKUQ.96sD3JPV8hEdyi88qtQSRczc6',NULL,'2018-04-20 10:19:57','2018-04-20 10:20:55',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Hoạt động',NULL),('xuan1','$2b$10$.Vs.CXDkIzWRMkXVhRa8HewJBDjkiZSCb6qEgmpGseVTYdt8qKwUG',NULL,'2018-04-13 00:28:31','2018-04-13 00:28:31',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('xuan2','$2b$10$9FfwE8/.uQiirh/9XrR/nuADdh1x7gZhSn0U4BgRICBmydXYoDQT.',NULL,'2018-04-13 00:30:15','2018-04-13 00:30:15',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Xuanxuka','$2b$10$iJ52wMHpV8uJWxX1MtUDIOcJxQzwsy7uhmmW41brjsK6xD4keYJOm',NULL,'2018-04-17 00:42:08','2018-04-17 00:42:08','Nguyễn thị Xuân',NULL,'Hà Nội','',NULL,NULL,'CTV','Hoạt động',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userinfo`
--

DROP TABLE IF EXISTS `userinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userinfo` (
  `username` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `url_avatar` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinfo`
--

LOCK TABLES `userinfo` WRITE;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES ('ngoc','Dinh Thi Ngoc','5/9/1996','images/user/ngoc.jpg','Kham Thien','Viet Nam',7,NULL,NULL),('linh','Trinh Duc Bao Linh','19/4/1995','images/user/linh.jpg','Bui Xuong Trach','Viet Nam',8,NULL,NULL),('phuonganh','Tran Phuong Anh','23/10/1996','images/user/phuonganh.jpg','Ki tuc','Viet Nam',9,NULL,NULL),('terry','Samrit Sotheary','1/4/1994','images/user/terry.jpg','Phnom Penh','Campuchia',10,NULL,NULL);
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'tree_bk'
--
/*!50106 SET @save_time_zone= @@TIME_ZONE */ ;
/*!50106 DROP EVENT IF EXISTS `sess_cleanup` */;
DELIMITER ;;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;;
/*!50003 SET character_set_client  = utf8 */ ;;
/*!50003 SET character_set_results = utf8 */ ;;
/*!50003 SET collation_connection  = utf8_general_ci */ ;;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;;
/*!50003 SET @saved_time_zone      = @@time_zone */ ;;
/*!50003 SET time_zone             = 'SYSTEM' */ ;;
/*!50106 CREATE*/ /*!50117 DEFINER=`root`@`localhost`*/ /*!50106 EVENT `sess_cleanup` ON SCHEDULE EVERY 15 MINUTE STARTS '2018-04-12 17:09:46' ON COMPLETION NOT PRESERVE ENABLE DO DELETE FROM `sessions` WHERE id IN (SELECT temp.id FROM (SELECT `id` FROM `sessions` WHERE `expires` > 0 AND `expires` < UNIX_TIMESTAMP()) AS temp) */ ;;
/*!50003 SET time_zone             = @saved_time_zone */ ;;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;;
/*!50003 SET character_set_client  = @saved_cs_client */ ;;
/*!50003 SET character_set_results = @saved_cs_results */ ;;
/*!50003 SET collation_connection  = @saved_col_connection */ ;;
DELIMITER ;
/*!50106 SET TIME_ZONE= @save_time_zone */ ;

--
-- Dumping routines for database 'tree_bk'
--
/*!50003 DROP PROCEDURE IF EXISTS `getall_activesystem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getall_activesystem`()
BEGIN
	select *
    from activesystem ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getall_chat` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getall_chat`()
BEGIN
	select *
    from chats ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getall_code` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getall_code`()
BEGIN
	select *
    from allcode ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getall_coordinates` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getall_coordinates`(
   grouptree_id INT
)
BEGIN
 
    SET @grouptree_id =   grouptree_id;
    SET @sql = ' select*  from coordinates,tree,group_tree where tree.id = coordinates.tree_id and tree.grouptree_id = group_tree.id ';
    IF(grouptree_id = 0) THEN
		SET @d2 = ' ' ;
	ELSE
		SET @d2 = CONCAT('AND tree.grouptree_id=',grouptree_id);
	END IF;	
	
	SET @q = CONCAT(@sql, @d2);
    
	PREPARE stmt FROM @q;

	EXECUTE stmt ;
	DEALLOCATE PREPARE stmt;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getall_grouptree` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getall_grouptree`()
BEGIN
	select *
    from group_tree ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getall_historytree` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getall_historytree`()
BEGIN
	select *
    from historytree ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getall_menu` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getall_menu`()
BEGIN
	select *
    from menu ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getall_role` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getall_role`()
BEGIN
	select *
    from role ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getall_tree` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getall_tree`()
BEGIN
	select *
    from tree ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getall_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getall_user`()
BEGIN
	select *
    from user ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getall_userinfo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getall_userinfo`()
BEGIN
	select *
    from userinfo ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getlist_coordinates` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getlist_coordinates`(IN fruitArray VARCHAR(255))
BEGIN

  SET @sql = CONCAT(' select*  from coordinates,tree,group_tree where tree.id = coordinates.tree_id and tree.grouptree_id = group_tree.id and tree.grouptree_id IN (', fruitArray, ')');
  PREPARE stmt FROM @sql;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getlist_historytree` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getlist_historytree`(tree_id int)
BEGIN
	select fullname,water_use,waterneed,time_use,tree_id
    
    from historytree,userinfo 
    where historytree.username = userinfo.username and tree_id=historytree.tree_id
    order by time_use desc ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getlist_menu` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getlist_menu`(rolcodeinput varchar(50))
BEGIN
	select * 
    from menu,link_rolemenu
    where menu.id = link_rolemenu.menu_id and link_rolemenu.rolecode = rolcodeinput ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getlist_menu_by_role` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getlist_menu_by_role`(rolcodeinput varchar(50))
BEGIN
	select * 
    from menu,link_rolemenu
    where menu.id = link_rolemenu.menu_id and link_rolemenu.rolecode = rolcodeinput ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `statistic_historytree_by_sumwater` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `statistic_historytree_by_sumwater`(id varchar(45))
BEGIN
	select group_tree.groupname, tree.code, sum(water_use) as sum_water
	from historytree, tree, group_tree
	where historytree.tree_id = tree.id and group_tree.id = tree.grouptree_id and id = historytree.tree_id
	group by tree_id
    ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `statistic_historytree_by_turns` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `statistic_historytree_by_turns`(id varchar(45))
BEGIN
	select group_tree.groupname, tree.code, username, count(*) as count_turns, sum(water_use) as sum_water
	from historytree, tree, group_tree
	where historytree.tree_id = tree.id and group_tree.id = tree.grouptree_id and id = historytree.tree_id
	group by username
    ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `statistic_role` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `statistic_role`()
BEGIN
	select rolename as Chức_vụ ,count(*) as số_lượng
	from role,user
	where role.rolecode = user.rolecode 
	group by role.rolecode,rolename ;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `statistic_tree` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `statistic_tree`()
BEGIN
	select groupname,count(*)
	from tree,group_tree
	where tree.grouptree_id = group_tree.id 
	group by tree.grouptree_id ;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `statistic_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `statistic_user`()
BEGIN
	select groupname,count(*)
	from tree,group_tree
	where tree.grouptree_id = group_tree.id 
	group by tree.grouptree_id ;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `statistic_user_watermax_for_a_tree` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `statistic_user_watermax_for_a_tree`(id INT)
BEGIN
	select group_tree.groupname, username, count(historytree.username) as so_lan_tuoi, sum(water_use) as tong_luong_nuoc
	from historytree, group_tree, tree
	where group_tree.id = tree.grouptree_id and tree.id = id
	group by historytree.username
    ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `statis_status_tree` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `statis_status_tree`()
BEGIN
	select status as Trạng_thái, count(*)as số_lượng
	from tree
	group by tree.status 
    ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `thongke_tree_theo_lich_su_tuoi` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `thongke_tree_theo_lich_su_tuoi`()
BEGIN
	select group_tree.groupname, tree.code, historytree.time_use as lich_su, water_use
	from historytree, tree, group_tree
	where historytree.tree_id = tree.id and group_tree.id = tree.grouptree_id
	group by tree_id
    ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `thongke_tree_theo_ten` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `thongke_tree_theo_ten`()
BEGIN
	select group_tree.groupname, count(tree.grouptree_id) as tong_so_cay
	from group_tree, tree
	where group_tree.id = tree.grouptree_id
	group by tree.grouptree_id
    ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `thongke_user_theo_so_lan_tuoi` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `thongke_user_theo_so_lan_tuoi`()
BEGIN
	select historytree.username, count(historytree.username) as so_lan_tuoi, sum(water_use) as tong_luong_nuoc
	from historytree, tree, group_tree
	where historytree.tree_id = tree.id and group_tree.id = tree.grouptree_id
	group by historytree.username
    order by so_lan_tuoi DESC
    ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-02 10:08:52
