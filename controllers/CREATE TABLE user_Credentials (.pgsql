CREATE TABLE user_Credentials (
    UserID SERIAL PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL
);