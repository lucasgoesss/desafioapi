"use strict";

require("express-async-errors");

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const migrationsRun = require("./database/sqlite/migrations");
const uploadConfig = require("./configs/upload.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));
app.use(routes);

const PORT = 3334;

migrationsRun();

app.listen(PORT, () =>
  console.info(`Server running in http://localhost:${PORT}`)
);
