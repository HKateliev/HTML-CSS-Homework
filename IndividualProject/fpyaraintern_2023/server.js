const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres", "postgres", "hkateliev99", {
  host: "localhost",
  dialect: "postgres",
  port: 5434,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => {
    console.error("Unable to connect to DB", err);
  });
