create table users
(
    id bigint auto_increment,
    constraint users_pk
        primary key (id),
    Name TEXT not null,
    Email TEXT not null,
    Birthdate datetime null
);
