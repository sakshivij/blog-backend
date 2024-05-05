CREATE TABLE blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO blogs(title, content, createdAt, updatedAt) VALUES ("Blog 1", "This is a dummy content for the blog 1", NOW(), NOW());
INSERT INTO blogs(title, content, createdAt, updatedAt) VALUES ("Blog 2", "This is a dummy content for the blog 2", NOW(), NOW());
INSERT INTO blogs(title, content, createdAt, updatedAt) VALUES ("Blog 3", "This is a dummy content for the blog 3", NOW(), NOW());
INSERT INTO blogs(title, content, createdAt, updatedAt) VALUES ("Blog 4", "This is a dummy content for the blog 4", NOW(), NOW());
