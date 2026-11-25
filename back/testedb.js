const db = require("./db");
(async () => {
  try {
    const [r] = await db.query("SELECT VERSION() AS versao, DATABASE() AS banco");
    console.log("Conectou:", r[0]);
    const [t] = await db.query("SHOW TABLES");
    console.log("Tabelas:", t.map((x) => Object.values(x)[0]));
  } catch (e) {
    console.error("Falhou:", e.code, e.message);
  }
  process.exit();
})();