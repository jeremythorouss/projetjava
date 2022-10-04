Drop table  users;

create table users
(
    id bigint auto_increment,
    constraint users_pk
        primary key (id),
    name varchar(255) not null,
    email varchar(255) not null,
    birthdate datetime null
);
Drop table  salles;
create table salles
(
    id bigint auto_increment,
    constraint salles_pk
        primary key (id),
    name varchar(255) not null,
    photo varchar(255) null,
    capacite int null,
    equipement varchar(255)  null
);
