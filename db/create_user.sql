INSERT INTO users
(user_name, image, auth_id)
VALUES ($1, $2, $3)
RETURNING *;