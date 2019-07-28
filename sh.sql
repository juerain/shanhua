SET NAMES UTF8;
DROP DATABASE IF EXISTS sh;
CREATE DATABASE sh CHARSET=UTF8;
USE sh;
#用户表
CREATE TABLE sh_user(
  uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  uname VARCHAR(12),
  upwd VARCHAR(20),
  phone VARCHAR(11),
  email VARCHAR(20),
  user_name VARCHAR(16),
  gender INT
);
INSERT INTO sh_user VALUES('NULL','tom','123456','15563254526','15465254@qq.com','张涛','1'),
('NULL','tom','123456','15563254526','15465254@qq.com','张涛','1'),
('NULL','tom','123456','15563254526','15465254@qq.com','张涛','1');

#用户收件地址表
CREATE TABLE sh_receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  receiver VARCHAR(16),
  province VARCHAR(16),
  city VARCHAR(16),
  county VARCHAR(16),
  address VARCHAR(128),
  cellphone VARCHAR(16),
  fixedphone VARCHAR(16),
  postcode CHAR(6),
  tag VARCHAR(16),
  is_default BOOLEAN
);

#用户购物车表
CREATE TABLE sh_shopping_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  product_id INT,
  count INT
);

#用户订单表
CREATE TABLE sh_order(
  oid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  address_id INT,
  status INT,
  order_time BIGINT,
  pay_time BIGINT,
  deliver_time BIGINT,
  received BIGINT
);

#用户订单详情表
CREATE TABLE lg_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,
  product_id INT,
  count INT
);

#商品类别表
CREATE TABLE sh_trade_type(
  tid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32)
);




