const mongoose = require("mongoose");
/**
 * ici l'adresse localhost de la database qu'on a créé sur MongoDB
 */
const databaseUrl = "mongodb://localhost/argentBank-api";

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true });
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
