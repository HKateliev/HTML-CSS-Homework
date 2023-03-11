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

const Employee = sequelize.define("employee", {
  employeeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  employeeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  farmID: {
    type: DataTypes.INTEGER,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Employee table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

Employee.bulkCreate([
  {
    employeeName: "Clarice",
    duty: "Grain farm worker ",
  },
  {
    employeeName: "Therese",
    duty: "Cattle ranch labourer ",
  },
  {
    employeeName: "Kara",
    duty: "Dairy farm worker ",
  },
  {
    employeeName: "Lamont",
    duty: "Farm machinery operator ",
  },
  {
    employeeName: "Edgardo",
    duty: "Harvester machine operator ",
  },
  {
    employeeName: "Stephanie",
    duty: "Hatchery worker ",
  },
  {
    employeeName: "Stacey",
    duty: "Poultry farm worker ",
  },
  {
    employeeName: "Marci",
    duty: "Vegetable farm worker",
  },
  {
    employeeName: "George",
    duty: "Beef cattle farm worker ",
  },
  {
    employeeName: "Issac",
    duty: "Beef cattle farm worker ",
  },
]).then(() => console.log("Users data have been saved"));
