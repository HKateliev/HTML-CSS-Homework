const express = require("express");
const bodyParser = require("body-parser");
const {
  Employee,
} = require("/Users/hkateliev/Desktop/Lecture 5 Node Exercise/express/models/employee.js");
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

//Employees findAll
app.get("/Employee", async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
});

//Employee based on ID
app.get("/Employee/:employeeID", async (req, res) => {
  const employee = await Employee.findByPk(req.params.employeeID);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
});

//Post Employee
app.post("/Employee", async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update Employee
app.put("/Employee/:employeeID", async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.employeeID);
    if (employee) {
      await employee.update(req.body);
      res.json(employee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Employee Delete
app.delete("/Employee/:employeeID", async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.employeeID);
    if (employee) {
      await employee.destroy();
      res.json({ message: "Employee deleted successfully" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
