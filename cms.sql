/*
Navicat MySQL Data Transfer

Source Server         : answer
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : answer

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2018-06-18 23:06:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `comments`
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `create_time` datetime NOT NULL,
  `modify_time` datetime NOT NULL,
  `topic_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comments
-- ----------------------------
INSERT INTO `comments` VALUES ('2', 'ehhehe', '2018-06-17 01:39:51', '2018-06-17 01:39:51', '1', '9');
INSERT INTO `comments` VALUES ('3', 'nice', '2018-06-18 13:19:25', '2018-06-18 13:19:34', '29', '7');
INSERT INTO `comments` VALUES ('4', 'good\n', '2018-06-18 01:23:29', '2018-06-18 01:23:29', '29', '7');
INSERT INTO `comments` VALUES ('5', '哟哟哟', '2018-06-18 01:32:36', '2018-06-18 01:32:36', '29', '17');
INSERT INTO `comments` VALUES ('6', '66666\n', '2018-06-18 07:29:06', '2018-06-18 07:29:06', '41', '7');
INSERT INTO `comments` VALUES ('7', 'nice\n', '2018-06-18 07:29:27', '2018-06-18 07:29:27', '41', '7');
INSERT INTO `comments` VALUES ('8', '什么哦', '2018-06-18 07:34:34', '2018-06-18 07:34:34', '41', '17');

-- ----------------------------
-- Table structure for `topics`
-- ----------------------------
DROP TABLE IF EXISTS `topics`;
CREATE TABLE `topics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modify_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of topics
-- ----------------------------
INSERT INTO `topics` VALUES ('1', 'test', 'test content', '2018-06-17 10:22:17', '2018-06-17 10:22:17', '7');
INSERT INTO `topics` VALUES ('29', 'restful接口设计规范', '域名\n版本\n路径\nhttp动词\n过滤信息\n状态码\n    201 204  400 401 500\n返回结果', '2018-06-18 01:15:43', '2018-06-18 01:24:45', '7');
INSERT INTO `topics` VALUES ('31', 'this is test', 'this is test', '2018-06-18 06:57:36', '2018-06-18 06:57:36', '7');
INSERT INTO `topics` VALUES ('32', 'this is test', 'this is test', '2018-06-18 06:57:42', '2018-06-18 06:57:42', '7');
INSERT INTO `topics` VALUES ('33', 'this is test', 'this is test', '2018-06-18 06:57:46', '2018-06-18 06:57:46', '7');
INSERT INTO `topics` VALUES ('34', 'this is test', 'this is test', '2018-06-18 06:57:48', '2018-06-18 06:57:48', '7');
INSERT INTO `topics` VALUES ('35', 'this is test', 'this is test', '2018-06-18 06:57:52', '2018-06-18 06:57:52', '7');
INSERT INTO `topics` VALUES ('36', 'this is test', 'this is test', '2018-06-18 06:57:55', '2018-06-18 06:57:55', '7');
INSERT INTO `topics` VALUES ('37', 'this is test', 'this is test', '2018-06-18 06:58:00', '2018-06-18 06:58:00', '7');
INSERT INTO `topics` VALUES ('38', 'this is test', 'this is test', '2018-06-18 06:58:03', '2018-06-18 06:58:03', '7');
INSERT INTO `topics` VALUES ('39', 'this is test', 'this is test', '2018-06-18 06:58:06', '2018-06-18 06:58:06', '7');
INSERT INTO `topics` VALUES ('40', 'this is test', 'this is test', '2018-06-18 06:58:10', '2018-06-18 06:58:10', '7');
INSERT INTO `topics` VALUES ('41', 'vue全家桶', 'vue vue-router vuex webpack babel axios es6 ', '2018-06-18 07:28:13', '2018-06-18 07:28:13', '7');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `gender` tinyint(4) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modify_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('7', 'cdw', '23808ba4b1e36d4d32f1d81676b36eee', '576120983@qq.com', 'default-avatar.png', '0', '2018-06-17 09:31:09', '2018-06-17 09:31:09');
INSERT INTO `users` VALUES ('8', 'undefined', '8add17102ed680d0c84b756c9ea173dc', 'undefined', 'default-avatar.png', '0', '2018-06-17 12:13:13', '2018-06-17 12:13:13');
INSERT INTO `users` VALUES ('9', '123', 'd9b1d7db4cd6e70935368a1efb10e377', '123@123', 'default-avatar.png', '0', '2018-06-17 12:15:06', '2018-06-17 12:15:06');
INSERT INTO `users` VALUES ('10', 'undefined', '8add17102ed680d0c84b756c9ea173dc', 'undefined', 'default-avatar.png', '0', '2018-06-17 05:18:21', '2018-06-17 05:18:21');
INSERT INTO `users` VALUES ('11', '123', 'd9b1d7db4cd6e70935368a1efb10e377', '123@123', 'default-avatar.png', '0', '2018-06-17 05:21:21', '2018-06-17 05:21:21');
INSERT INTO `users` VALUES ('12', '123', 'd9b1d7db4cd6e70935368a1efb10e377', '123@123', 'default-avatar.png', '0', '2018-06-17 05:21:45', '2018-06-17 05:21:45');
INSERT INTO `users` VALUES ('13', '1234', 'd9b1d7db4cd6e70935368a1efb10e377', '123@123', 'default-avatar.png', '0', '2018-06-17 06:21:39', '2018-06-17 06:21:39');
INSERT INTO `users` VALUES ('14', 'cdd', '6c3e54719bca5a775d8a880ff422e736', 'cdd@cdd', 'default-avatar.png', '0', '2018-06-17 07:49:17', '2018-06-17 07:49:17');
INSERT INTO `users` VALUES ('15', '1234', 'd9b1d7db4cd6e70935368a1efb10e377', '123@123', 'default-avatar.png', '0', '2018-06-17 11:17:49', '2018-06-17 11:17:49');
INSERT INTO `users` VALUES ('16', '111', '9db06bcff9248837f86d1a6bcf41c9e7', '111@111', 'default-avatar.png', '0', '2018-06-18 10:18:14', '2018-06-18 10:18:14');
INSERT INTO `users` VALUES ('17', 'chendawei', '23808ba4b1e36d4d32f1d81676b36eee', 'cdw@cdw', 'default-avatar.png', '0', '2018-06-18 01:31:25', '2018-06-18 01:31:25');
