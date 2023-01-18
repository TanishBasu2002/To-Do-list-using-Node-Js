const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const url="mongodb+srv://TanishBasu:test1234@cluster0.qrmooxl.mongodb.net/todolistDB";
const connectDB = async function () {
  try {
    const con = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected : ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = connectDB;
