Drop table  users;

create table users
(
    id bigint auto_increment,
    constraint users_pk
        primary key (id),
    Name varchar(255) not null,
    Email varchar(255) not null,
    Birthdate datetime null
);
