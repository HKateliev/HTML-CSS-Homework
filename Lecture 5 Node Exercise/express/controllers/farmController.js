const express = require("express");
const bodyParser = require("body-parser");
const {
  Farm,
} = require("/Users/hkateliev/Desktop/Lecture 5 Node Exercise/express/models/farm.js");
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

//Farm findAll
app.get("/Farm", async (req, res) => {
  const farms = await Farm.findAll();
  res.json(farms);
});

//Farm based on ID
app.get("/Farm/:farmID", async (req, res) => {
  const farm = await Farm.findByPk(req.params.farmID);
  if (farm) {
    res.json(farm);
  } else {
    res.status(404).json({ message: "Farm not found" });
  }
});

//Post Farm
app.post("/Farm", async (req, res) => {
  try {
    const farm = await Farm.create(req.body);
    res.json(farm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update Farm
app.put("/Farm/:farmID", async (req, res) => {
  try {
    const farm = await Farm.findByPk(req.params.farmID);
    if (farm) {
      await farm.update(req.body);
      res.json(farm);
    } else {
      res.status(404).json({ message: "Farm not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Farm Delete
app.delete("/Farm/:farmID", async (req, res) => {
  try {
    const farm = await Farm.findByPk(req.params.farmID);
    if (farm) {
      await farm.destroy();
      res.json({ message: "Farm deleted successfully" });
    } else {
      res.status(404).json({ message: "Farm not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
