const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index')

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull:false
  },
  price: {
    type: DataTypes.STRING,
    allowNull:false,
  }
});



module.exports = Product