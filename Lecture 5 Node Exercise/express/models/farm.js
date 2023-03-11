const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres", "postgres", "hkateliev99", {
  host: "localhost",
  dialect: "postgres",
  port: 5434,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const Farm = sequelize.define("farm", {
  farmID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  customerID: {
    type: DataTypes.INTEGER,
  },
  farmName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fieldID: {
    type: DataTypes.INTEGER,
  },
  place: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Farm table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

Farm.bulkCreate([
  {
    farmName: "Val Butler",
    place: "Osaka",
  },
  {
    farmName: "Serena Lang",
    place: "Mexico City",
  },
  {
    farmName: "Ahmad Travis",
    place: "Dobrich",
  },
  {
    farmName: "Leonel Cortez",
    place: "Bucharest",
  },
  {
    farmName: "Curtis Reeves",
    place: "Dobrich",
  },
  {
    farmName: "Alvin Henderson",
    place: "Dobrich",
  },
  {
    farmName: "Buck Hays",
    place: "Bucharest",
  },
  {
    farmName: "Dina Mccarty",
    place: "Kigali",
  },
  {
    farmName: "Freida Boone",
    place: "Kigali",
  },
  {
    farmName: "Kris Pittman",
    place: "Osaka",
  },
]).then(() => console.log("Users data have been saved"));

