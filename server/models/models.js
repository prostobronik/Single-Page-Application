const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Device = sequelize.define('device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  creation: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  count: { type: DataTypes.STRING, allowNull: false },
  distance: { type: DataTypes.STRING, allowNull: false },
})

module.exports = {
  Device,
}
