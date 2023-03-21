const config = {
  db: {
    /* do not put password or any sensitive info here, done only for demo */
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "root",
    database: "backend_sameit",
  },
  listPerPage: process.env.LIST_PER_PAGE || 10,
};

module.exports = config;
