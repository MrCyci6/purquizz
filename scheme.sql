CREATE TABLE stat (
    `count` INT DEFAULT 0
)

CREATE TABLE type (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `denomination` VARCHAR(255) NOT NULL
)

CREATE TABLE method (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `denomination` VARCHAR(255) NOT NULL
)

CREATE TABLE question (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `type_id` INT NOT NULL,
    `question` VARCHAR(255) NOT NULL,
    `method_id` INT NOT NULL,
    `score` JSON NOT NULL,

    FOREIGN KEY (type_id) REFERENCES type(id),
    FOREIGN KEY (method_id) REFERENCES method(id)
)