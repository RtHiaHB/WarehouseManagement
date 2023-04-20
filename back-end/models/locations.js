'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  locations.init({
    loc_id: DataTypes.INTEGER,
    aisle: DataTypes.INTEGER,
    column: DataTypes.INTEGER,
    level: DataTypes.STRING,
    prod_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'locations',
  });
  return locations;
};