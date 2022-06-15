"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      favorite.belongsTo(models.user, { foreignKey: "userId" });
      favorite.belongsTo(models.profile, { foreignKey: "profileId" });
    }
  }
  favorite.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      profileId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "favorite",
    }
  );
  return favorite;
};
