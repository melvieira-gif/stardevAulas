const mysql = require("mysql2/promise");

const usaSSL = ["true", "1"].includes(String(process.env.DB_SSL).toLowerCase());

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  port: Number(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME || "stardev",
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT) || 5,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
  ssl: usaSSL ? { minVersion: "TLSv1.2", rejectUnauthorized: true } : undefined,
});

module.exports = pool;