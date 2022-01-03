DROP DATABASE IF EXISTS employee_trackingdb;

CREATE DATABASE employee_trackingdb;

USE employee_trackingdb;

CREATE TABLE department (

id INT AUTO_INCREMENT NOT NULL,

department_name VARCHAR(30) NOT NULL,

PRIMARY KEY(id)

);

CREATE TABLE role (

id INT AUTO_INCREMENT NOT NULL,

title VARCHAR(30) NOT NULL,

salary DECIMAL(10,4) NOT NULL,

department_id VARCHAR(30) NOT NULL,

PRIMARY KEY(id)

);


CREATE TABLE employee ( 

id INT AUTO_INCREMENT NOT NULL,

first_name VARCHAR(30) NOT NULL,

last_name VARCHAR(30) NOT NULL,

role_id INT,

manager_id INT NULL,

PRIMARY KEY(id)
);


