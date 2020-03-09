'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    breder: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    addres: DataTypes.STRING,
    level: DataTypes.ENUM("user", "admin"),
    pet_id: DataTypes.INTEGER

      }, {});
  user.associate = function(models) {}
  return user;
};