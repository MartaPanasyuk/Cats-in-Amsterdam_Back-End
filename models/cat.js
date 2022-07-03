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
    }
  }
  cat.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      picture: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      seenTime: { type: DataTypes.INTEGER, defaultValue: 1 },
      lat: { type: DataTypes.INTEGER, allowNull: false },
      long: { type: DataTypes.INTEGER, allowNull: false },
      ownerId: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "cat",
    }
  );
  return cat;
};

// { type: DataTypes.STRING, unique: true, allowNull: false },
