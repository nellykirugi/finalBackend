const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index')

const Message = sequelize.define('Message', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull:false
  },
});



module.exports = Message