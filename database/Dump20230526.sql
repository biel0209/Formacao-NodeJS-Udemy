CREATE DATABASE  IF NOT EXISTS `guia_perguntas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `guia_perguntas`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: guia_perguntas
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pergunta`
--

DROP TABLE IF EXISTS `pergunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pergunta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) DEFAULT NULL,
  `descricao` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pergunta`
--

LOCK TABLES `pergunta` WRITE;
/*!40000 ALTER TABLE `pergunta` DISABLE KEYS */;
INSERT INTO `pergunta` VALUES (1,'Como instalar o express via terminal?','Estou usando o sistema windows!','2023-05-16 13:19:10','2023-05-16 13:19:10'),(2,'Como estudar melhor?','Dicas para ter um melhor rendimento na hora de estudar.','2023-05-16 13:20:53','2023-05-16 13:20:53'),(3,'Como fazer uma formatação no Android?','Como formatar um samsung?','2023-05-16 13:37:51','2023-05-16 13:37:51'),(4,'Como fazer requisições https?','Como posso fazer sem ser http normal?','2023-05-16 13:56:14','2023-05-16 13:56:14'),(5,'A que altura os satélites devem ficar?','Me refiro aos geoestacionários!','2023-05-16 15:22:53','2023-05-16 15:22:53'),(6,'Via terminal, como limpar o cache dns do roteador?','No windows','2023-05-16 15:23:33','2023-05-16 15:23:33');
/*!40000 ALTER TABLE `pergunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resposta`
--

DROP TABLE IF EXISTS `resposta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resposta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `corpo` text NOT NULL,
  `perguntaId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resposta`
--

LOCK TABLES `resposta` WRITE;
/*!40000 ALTER TABLE `resposta` DISABLE KEYS */;
INSERT INTO `resposta` VALUES (1,'Pressione ao mesmo tempo as teclas Windows+R e você deverá ver o menu “executar” abrir;\r\nEm seguida, digite cmd para abrir o console do Prompt de Comando do Windows;\r\nInsira o comando “ipconfig /flushdns” para limpar os arquivos de cache DNS do seu pc;',6,'2023-05-16 18:14:19','2023-05-16 18:14:19'),(2,'A maioria usa a órbita geoestacionária (equatorial), ou seja, acompanha o movimento de rotação da terra, a 36.000 km de altitude, apontando sempre para o mesmo lugar.',5,'2023-05-16 19:47:54','2023-05-16 19:47:54'),(3,'Depende de qual tecnologia, linguagem, framework vc está trabalhando. Poderia fornecer mais informações?',4,'2023-05-16 19:48:47','2023-05-16 19:48:47'),(4,'Passo 1. Acesse as configurações do Android e toque em \"Gerenciamento geral\".\r\nPasso 2. Em seguida, vá em \"Restaurar\" e toque em \"Restaurar padrão de fábrica\".\r\nPasso 3. Toque em \"Redefinir\" e confirme o seu padrão ou senha PIN. Por fim, toque em \"Apagar tudo\".\r\n\r\n',3,'2023-05-16 19:49:48','2023-05-16 19:49:48'),(5,'1. Fuja da curva do esquecimento\r\n2. Estude com material impresso em vez de contar apenas com as telas\r\n3. Aposte na aprendizagem contextual ',2,'2023-05-16 19:50:24','2023-05-16 19:50:24'),(6,'npm install express --save',1,'2023-05-16 19:50:56','2023-05-16 19:50:56'),(7,'Só abrir o terminal e rodar ipconfig /flushdns     ',6,'2023-05-16 19:58:15','2023-05-16 19:58:15'),(8,'ipconfig /flushdns',6,'2023-05-16 20:02:16','2023-05-16 20:02:16'),(9,'Abre o terminal e digite o seguinte comando:\r\nipconfig /flushdns',6,'2023-05-18 20:04:20','2023-05-18 20:04:20');
/*!40000 ALTER TABLE `resposta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-26 17:35:51
