CREATE TYPE userRoles AS ENUM ('admin', 'worker', 'customer');
CREATE TYPE stateTypes AS ENUM ('male', 'female');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role userRoles NOT NULL,
    dateCreate DATE NOT NULL,
    profileId INTEGER NOT NULL,
  FOREIGN KEY (profileId) REFERENCES profiles(id)
);

CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  state stateTypes NOT NULL
);