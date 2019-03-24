DROP DATABASE IF EXISTS sfv_framedatadb;

CREATE DATABASE sfv_framedatadb;

USE sfv_framedatadb;

create table ryu (
	id int auto_increment not null,
	move varchar (255) not null,
    startup varchar (100), 
    active varchar (100),
    recovery varchar (100),
    onHit varchar (100),
    onBlock varchar(100),
    damage varchar (100),
    stun varchar(100),
    moveType varchar(255),
    attackType varchar (100),
    cancels varchar(100),
    notes varchar(255),
    gif varchar (255),
    primary key (id)
    );
    
