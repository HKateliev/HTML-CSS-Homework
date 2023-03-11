const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres", "postgres", "hkateliev99", {
  host: "localhost",
  dialect: "postgres",
  port: 5434,
});

const Customer = require("./express/models/customer")(sequelize, DataTypes);
const { Field } = require("./express/models/field");
const { Farm } = require("./express/models/farm");
const { Employee } = require("./express/models/employee");

Customer.hasOne(Farm, {
  foreignKey: "ownerId",
  sourceKey: "customerID",
});
Farm.belongsTo(Customer, {
  foreignKey: "ownerId",
  sourceKey: "customerID",
});

Field.hasOne(Farm, {
  foreignKey: "fieldId",
  sourceKey: "fieldID",
});
Farm.belongsTo(Field, {
  foreignKey: "fieldId",
  sourceKey: "fieldID",
});

Farm.hasOne(Employee, {
  foreignKey: "farmId",
  sourceKey: "farmID",
});
Employee.belongsTo(Farm, {
  foreignKey: "farmId",
  sourceKey: "farmID",
});

sequelize
  .sync()
  .then(() => {
    console.log("Foreign Keys created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create foreign keys : ", error);
  });
