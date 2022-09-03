const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017";

mongoose
  .connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,

    dbName: "mern-test",
  })
  .then(console.log("Conectado a la base de datos"))
  .catch(console.error);
