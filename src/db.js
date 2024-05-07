require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const aboutModel = require("./models/aboutModel");
const projectModel = require("./models/projectModel");
const technologyModel = require("./models/technologyModel");
const userModel = require("./models/userModel");

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
projectModel(sequelize);
technologyModel(sequelize);
userModel(sequelize);

const { project, technology } = sequelize.models;

project.belongsToMany(technology, { through: "ProjectTechnology" });
technology.belongsToMany(project, { through: "ProjectTechnology" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
