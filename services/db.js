const { Pool } = require("pg");
// const config = require("../config");
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "root",
  database: "backend_sameit",
});

/**
 * Query the database using the pool
 * @param {*} query
 * @param {*} params
 *
 * @see https://node-postgres.com/features/pooling#single-query
 */
async function query(query, params) {
  // eslint-disable-next-line no-unused-vars
  const { rows, fields } = await pool.query(query, params);

  return rows;
}

module.exports = {
  query,
};
