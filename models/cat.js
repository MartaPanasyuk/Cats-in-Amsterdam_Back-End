"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cat.hasMany(models.rating);
      cat.hasMany(models.comment);
      cat.hasMany(models.image);
      cat.belongsTo(models.user, { foreignKey: "ownerId" });
    }
  }
  cat.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      picture: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      like: { type: DataTypes.INTEGER, defaultValue: 3 },
      latitude: { type: DataTypes.FLOAT, allowNull: false },
      longitude: { type: DataTypes.FLOAT, allowNull: false },
      ownerId: { type: DataTypes.INTEGER, allowNull: true },
    },
    {
      sequelize,
      modelName: "cat",
    }
  );
  return cat;
};

// { type: DataTypes.STRING, unique: true, allowNull: false },
