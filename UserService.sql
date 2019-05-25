CREATE DATABASE sellnbye

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint(20) NOT NULL,
  `address` varchar(128) NOT NULL,
  `email` varchar(50) NOT NULL,
  `is_valid` bit(1) NOT NULL,
  `name` varchar(128) NOT NULL,
  `pw` varchar(50) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `uname` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`),
  UNIQUE KEY `UK_nbfia2ok6c7at4i0er6uyskkx` (`tel`),
  UNIQUE KEY `UK_33usp01rahy3w7nv0g62b3s8s` (`uname`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

