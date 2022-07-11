"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      image.belongsTo(models.user);
      image.belongsTo(models.cat);
    }
  }
  image.init(
    {
      url: { type: DataTypes.STRING, allowNull: false },
      latitude: { type: DataTypes.FLOAT, allowNull: false },
      longitude: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
      sequelize,
      modelName: "image",
    }
  );
  return image;
};
