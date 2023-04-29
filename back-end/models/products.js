'use strict';


const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Products.hasMany(models.Locations, { foreignKey: 'prod_id'})
        Products.hasMany(models.Order_Items, { foreignKey: 'prod_id' })
    }
  }
  Products.init({
    prod_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Products',
    tableName: 'products',
    timestamps: false
  });
  return Products;
};