const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // usar variable de entorno
  ssl: {
    rejectUnauthorized: false, // necesario en Render
  },
});

module.exports = pool;
