INSERT INTO users (username, hash, profilePic)
VALUES ($1, $2, $3)
returning id, username