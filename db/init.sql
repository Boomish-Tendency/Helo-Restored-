DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

create table users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    hash VARCHAR(2000),
    profilePic text
);

create table if not exists posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    img VARCHAR(200),
    content VARCHAR(2000),
    author_id INT REFERENCES users(id)
);
