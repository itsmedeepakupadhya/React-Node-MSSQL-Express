module.exports = {
  HOST: "localhost",
  USER: "sa",
  PASSWORD: "Welcome@1234",
  DB: "testdb",
  dialect: "mssql",
  port:1433,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
