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
