'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Order_Assignments.belongsTo(models.Users, { foreignKey: 'user_id' })
      // Order_Assignments.belongsTo(models.Orders, { foreignKey: 'order_id' })
    }
  }
  Order_Assignments.init({
    order_ass_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Order_Assignments',
    tableName: 'order_assignments',
    timestamps: false
  });
  return Order_Assignments;
};