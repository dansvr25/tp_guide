--liquibase formatted sql

--changeset id:1 author:dsviridov
drop table if exists users, categories, guides cascade;

--changeset id:2 author:dsviridov
create table if not exists users
(
    id       bigint generated always as identity primary key,
    name     varchar(50) not null unique,
    email    varchar(50) not null unique,
    password varchar not null
);

--changeset id:3 author:dsviridov
create table if not exists categories
(
    id   bigint generated always as identity primary key,
    name varchar(50) not null unique
);

--changeset id:4 author:dsviridov
create table if not exists guides
(
    id          bigint generated always as identity primary key,
    name        varchar(50) not null unique,
    text        varchar,
    photo_link  varchar,
    category_id bigint references categories (id) on delete cascade,
    is_liked    boolean default false
);