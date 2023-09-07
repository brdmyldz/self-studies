CREATE TABLE user_address (
    id int NOT NULL AUTO_INCREMENT,
    address varchar(255) NOT NULL,
    user_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);