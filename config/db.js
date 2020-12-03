const mongoose = require("mongoose");

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect("mongodb://127.0.0.1:27017/triter", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(`connection to DB established successful`);
      })
      .catch((err) => {
        console.log(`connection to DB established with error ${err}`);
      });
  }
}

module.exports = new Database();
