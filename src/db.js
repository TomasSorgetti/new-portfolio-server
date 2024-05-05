require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const aboutModel = require("./models/aboutModel");
const projectsModel = require("./models/projectsModel");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(async () => {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  })
  .catch(() => {
    console.error("Unable to connect to the database:", error);
  });

aboutModel(sequelize);
projectsModel(sequelize);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
