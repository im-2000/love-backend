"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      profile.belongsTo(models.user, { foreignKey: "userId", as: "owner" });
      profile.belongsToMany(models.user, {
        through: "favorites",
        foreignKey: "profileId",
        as: "fav",
      });
    }
  }
  profile.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      age: { type: DataTypes.INTEGER, allowNull: false },
      gender: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      about: { type: DataTypes.TEXT, allowNull: false },
      language: { type: DataTypes.STRING, allowNull: false },
      location: { type: DataTypes.STRING, allowNull: false },
      githubUrl: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "profile",
    }
  );
  return profile;
};
