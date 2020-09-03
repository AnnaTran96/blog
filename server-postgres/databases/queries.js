const index = `SELECT * FROM post`;
const show = `SELECT * FROM post WHERE id = $1`;
const create = `INSERT INTO post (title, name, story) VALUES ($1, $2, $3) RETURNING *`;
const update = `UPDATE post SET title = $1 , name = $2, story= $3  WHERE id = $4 RETURNING *`; 
const destroy = `DELETE FROM posts WHERE id = $1`;


module.exports = { index, show, create, update, destroy };