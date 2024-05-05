const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const About = sequelize.define(
    "about",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "about",
    }
  );

  return About;
};
