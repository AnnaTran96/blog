const index = `SELECT * FROM post`;
const show = `SELECT * FROM post WHERE id = $1`;
const create = `INSERT INTO post (title, name, story) VALUES ($1, $2, $3) RETURNING *`;

module.exports = { index, show, create };