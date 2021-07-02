/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50517
 Source Host           : localhost:3306
 Source Schema         : myblog

 Target Server Type    : MySQL
 Target Server Version : 50517
 File Encoding         : 65001

 Date: 27/06/2021 18:04:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_blog
-- ----------------------------
DROP TABLE IF EXISTS `t_blog`;
CREATE TABLE `t_blog`  (
  `blog_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '标题',
  `content` text CHARACTER SET utf8 COLLATE utf8_bin NULL COMMENT '内容',
  `post_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '发表时间',
  `read_count` int(11) NULL DEFAULT NULL COMMENT '阅读量',
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户表外键',
  `is_delete` int(11) NULL DEFAULT 0 COMMENT '标识是否删除记录',
  `cate_id` int(11) NULL DEFAULT NULL COMMENT '分类外键',
  PRIMARY KEY (`blog_id`) USING BTREE,
  INDEX `user_blog_user_id_fk`(`user_id`) USING BTREE,
  INDEX `category_blog_cate_id_fk`(`cate_id`) USING BTREE,
  CONSTRAINT `category_blog_cate_id_fk` FOREIGN KEY (`cate_id`) REFERENCES `t_category` (`cate_id`) ON DELETE SET NULL ON UPDATE RESTRICT,
  CONSTRAINT `user_blog_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`) ON DELETE SET NULL ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_blog
-- ----------------------------
INSERT INTO `t_blog` VALUES (1, '第一篇', 'aaa', '2021-05-05 17:44:46', 5, 1, 0, 1);
INSERT INTO `t_blog` VALUES (2, 'haha', 'hehe', '2021-05-21 16:56:45', 20, 2, 0, 2);
INSERT INTO `t_blog` VALUES (3, 'hoho', 'xixi', '2021-05-21 16:57:02', 12, 3, 0, 3);
INSERT INTO `t_blog` VALUES (4, 'hjp', 'lsx', '2021-05-21 18:29:20', 30, 6, 0, 2);
INSERT INTO `t_blog` VALUES (5, '1111', '1111', '2021-05-21 21:17:24', 111, 2, 0, 1);
INSERT INTO `t_blog` VALUES (6, '555', '555', '2021-05-24 21:49:46', 112, 1, 0, 1);
INSERT INTO `t_blog` VALUES (7, '666', '666', '2021-05-24 21:51:09', 2424, 2, 0, 1);
INSERT INTO `t_blog` VALUES (8, '333', '333', '2021-05-24 22:16:35', 152, 3, 0, 1);
INSERT INTO `t_blog` VALUES (9, 'lsx520', 'hjp', '2021-05-30 00:04:18', 32, 1, 0, 1);

-- ----------------------------
-- Table structure for t_category
-- ----------------------------
DROP TABLE IF EXISTS `t_category`;
CREATE TABLE `t_category`  (
  `cate_id` int(11) NOT NULL AUTO_INCREMENT,
  `cate_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '分类名称',
  PRIMARY KEY (`cate_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_category
-- ----------------------------
INSERT INTO `t_category` VALUES (1, '算法');
INSERT INTO `t_category` VALUES (2, '前端');
INSERT INTO `t_category` VALUES (3, '后端');

-- ----------------------------
-- Table structure for t_comment
-- ----------------------------
DROP TABLE IF EXISTS `t_comment`;
CREATE TABLE `t_comment`  (
  `comm_id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text CHARACTER SET utf8 COLLATE utf8_bin NULL COMMENT '评论内容',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) NULL DEFAULT NULL,
  `blog_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`comm_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_comment
-- ----------------------------
INSERT INTO `t_comment` VALUES (1, '好文', '2021-05-22 10:39:18', 1, 2);
INSERT INTO `t_comment` VALUES (2, '坏文', '2021-05-22 10:39:42', 3, 4);
INSERT INTO `t_comment` VALUES (3, '一般', '2021-05-22 10:40:12', 4, 2);
INSERT INTO `t_comment` VALUES (4, '今夏书屋', '2021-05-22 12:23:05', 2, 4);
INSERT INTO `t_comment` VALUES (5, '11111111111111111', '2021-05-22 12:23:26', 2, 4);
INSERT INTO `t_comment` VALUES (6, '（づ￣3￣）づ╭❤～', '2021-05-22 12:25:48', 2, 4);
INSERT INTO `t_comment` VALUES (7, 'egwgw', '2021-05-22 12:29:16', 2, 4);

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '用户名',
  `pass` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '密码',
  `tel` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '手机号',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `is_delete` int(11) NULL DEFAULT 0 COMMENT '标识是否删除记录',
  PRIMARY KEY (`user_id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_bin COMMENT = '用户表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES (1, 'zhangsan', '123456', '2323', '2021-05-05 16:18:41', 0);
INSERT INTO `t_user` VALUES (2, 'lisi', '123456', '333', '2021-05-05 18:59:45', 0);
INSERT INTO `t_user` VALUES (3, 'wangwu', '123456', '222', '2021-05-16 14:57:14', 0);
INSERT INTO `t_user` VALUES (4, 'zhaoliu', '123456', '1111', '2021-05-21 17:17:33', 0);
INSERT INTO `t_user` VALUES (5, '1111', '1111', '1111', '2021-05-21 17:30:06', 0);
INSERT INTO `t_user` VALUES (6, '2222', '2222', '2222', '2021-05-21 17:30:30', 0);
INSERT INTO `t_user` VALUES (7, 'fzdx', '111111', '111111', '2021-06-21 22:18:19', 0);
INSERT INTO `t_user` VALUES (16, 'lsx', '111111', '520', '2021-06-21 23:40:48', 0);
INSERT INTO `t_user` VALUES (17, 'kuaiwoniu', '111111', '123456', '2021-06-22 15:34:47', 0);
INSERT INTO `t_user` VALUES (18, 't1', '111111', '123123', '2021-06-23 17:32:27', 0);
INSERT INTO `t_user` VALUES (20, 't2', '111111', '111111', '2021-06-23 19:36:50', 0);

SET FOREIGN_KEY_CHECKS = 1;
