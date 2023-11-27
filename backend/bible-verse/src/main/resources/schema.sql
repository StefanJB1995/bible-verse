CREATE TABLE verse (id INT PRIMARY KEY, chapter VARCHAR(255), verse VARCHAR(4096));
CREATE TABLE user (id INT PRIMARY KEY, username VARCHAR(255), password VARCHAR(2000));

INSERT INTO verse(id,chapter,verse) VALUES (1,"John 1:1", "Testing john verse");