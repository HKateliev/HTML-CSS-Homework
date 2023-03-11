const express = require("express");
const bodyParser = require("body-parser");
const {
  Field,
} = require("/Users/hkateliev/Desktop/Lecture 5 Node Exercise/express/models/field.js");
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

//field findAll
app.get("/Field", async (req, res) => {
  const fields = await Field.findAll();
  res.json(fields);
});

//Field based on ID
app.get("/Field/:fieldID", async (req, res) => {
  const field = await Field.findByPk(req.params.fieldID);
  if (field) {
    res.json(field);
  } else {
    res.status(404).json({ message: "Field not found" });
  }
});

//Post Field
app.post("/Field", async (req, res) => {
  try {
    const field = await Field.create(req.body);
    res.json(field);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update Field
app.put("/Field/:fieldID", async (req, res) => {
  try {
    const field = await Field.findByPk(req.params.fieldID);
    if (field) {
      await field.update(req.body);
      res.json(field);
    } else {
      res.status(404).json({ message: "Field not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Field Delete
app.delete("/Field/:fieldID", async (req, res) => {
  try {
    const field = await Field.findByPk(req.params.fieldID);
    if (field) {
      await field.destroy();
      res.json({ message: "Field deleted successfully" });
    } else {
      res.status(404).json({ message: "Field not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
