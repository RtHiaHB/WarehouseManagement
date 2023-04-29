'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Locations.belongsTo(models.Products, { foreignKey: 'prod_id'})
    }
  }
  Locations.init({
    loc_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    aisle: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    col_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lvl: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prod_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Locations',
    tableName: 'locations',
    timestamps: false
  });
  return Locations;
};