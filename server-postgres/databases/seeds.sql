DROP TABLE IF EXISTS post;


CREATE TABLE post (
    id serial PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    name VARCHAR(50),
    story VARCHAR(400) NOT NULL
);

INSERT INTO post (title, name, story) VALUES
    ('Today seems like a dull day', 'Anna', 'I need to eat breakfast and lunch today'),
    ('Travel', 'Unknown', 'I want to travel again');