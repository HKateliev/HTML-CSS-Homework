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

const Field = sequelize.define("field", {
  fieldID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  soilType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cropType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Filed table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

Field.bulkCreate([
  {
    soilType: "Sandy Soil",
    cropType: "Grain farm worker ",
  },
  {
    soilType: "Silt Soil",
    cropType: "Cattle ranch labourer ",
  },
  {
    soilType: "Loam Soil",
    cropType: "Dairy farm worker ",
  },
  {
    soilType: "Sandy Soil",
    cropType: "Farm machinery operator ",
  },
  {
    soilType: "Loam Soil",
    cropType: "Harvester machine operator ",
  },
  {
    soilType: "Silt Soil",
    cropType: "Hatchery worker ",
  },
  {
    soilType: "Sandy Soil",
    cropType: "Poultry farm worker ",
  },
  {
    soilType: "Peat Soil",
    cropType: "Vegetable farm worker",
  },
  {
    soilType: "Peat Soil",
    cropType: "Beef cattle farm worker ",
  },
  {
    soilType: "Silt Soil",
    cropType: "Beef cattle farm worker ",
  },
]).then(() => console.log("Users data have been saved"));
