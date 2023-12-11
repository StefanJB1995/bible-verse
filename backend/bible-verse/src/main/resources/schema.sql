CREATE TABLE verse (id INT PRIMARY KEY, chapter VARCHAR(255), verse VARCHAR(4096));
CREATE TABLE "user" ("id" INT PRIMARY KEY IDENTITY(1,1), "username" VARCHAR(255), "password" VARCHAR(2000), "is_admin" INT, "is_special" INT);
CREATE TABLE Pill (id INT PRIMARY KEY IDENTITY(1,1), username VARCHAR(255), date_taken SMALLDATETIME);

INSERT INTO [dbo].[user] ("username", "password", "is_admin", "is_special") VALUES ('Najelly', 'A93A4BEBC136A21D4E7EB12D411BF67C',0,1);
INSERT INTO verse(id,chapter,verse) VALUES (1,"John 1:1", "Testing john verse");

INSERT INTO [dbo].[Pill] (username, date_taken) VALUES ('Najelly', '2023-12-11 12:43:10');