const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const fileUpload = require("express-fileupload");
const { mongoose } = require("./database");
// Configuraciones de servidor
const PORT = 3001;

app.set("port", process.env.PORT || PORT);

// Middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use("/api/", require("./routes/routes"));

// Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

//Ejecutar servidor express
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
