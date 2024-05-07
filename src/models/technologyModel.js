const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Technology = sequelize.define(
    "technology",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue:
          "https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png",
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "technology",
    }
  );

  return Technology;
};
