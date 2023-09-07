CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    fullname varchar(255) NOT NULL,
    mother_name varchar(255),
    father_name varchar(255),
    dob date NOT NULL,
    salary int NOT NULL,
    status int DEFAULT 1,
    CHECK (salary > 5000),
    PRIMARY KEY (id),
    UNIQUE (fullname)
);