const app = require("./utils/app");

const mongoose = require("mongoose");
const { MONGODB_URI, PORT } = require("./utils/config");

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("database connected succesfully");

    app.listen(PORT, () => {
      console.log("server is running on http://127.0.0.1:8000");
    });
  })
  .catch((error) => {
    console.log("error connecting to the db", error);
  });
