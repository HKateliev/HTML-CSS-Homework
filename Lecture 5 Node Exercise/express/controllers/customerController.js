const express = require("express");
const bodyParser = require("body-parser");
const {
  Customer,
} = require("/Users/hkateliev/Desktop/Lecture 5 Node Exercise/express/models/customer.js");
const { sequelize } = require("sequelize");
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

const app = express();
const port = 3000;

app.use(bodyParser.json());

//Customers findAll
app.get("/Customer", async (req, res) => {
  const customers = await Customer.findAll();
  res.json(customers);
});

//Customer based on ID
app.get("/Customer/:customerID", async (req, res) => {
  const customer = await Customer.findByPk(req.params.customerID);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
});

//Post Customer
app.post("/Customer", async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update Customer
app.put("/Customer/:customerID", async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.customerID);
    if (customer) {
      await customer.update(req.body);
      res.json(customer);
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Customer Delete
app.delete("/Customer/:customerID", async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.customerID);
    if (customer) {
      await customer.destroy();
      res.json({ message: "Customer deleted successfully" });
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
