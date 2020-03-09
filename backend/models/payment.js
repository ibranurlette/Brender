'use strict';
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define('payment', {
    no_rek: DataTypes.STRING,
    prof_transfer: DataTypes.STRING,
    status: DataTypes.ENUM("free", "premium"),
    user_id:DataTypes.INTEGER
  }, {});
  payment.associate = function(models) {
    // associations can be defined here
    payment.belongsTo(models.user, {
      as: "use",
      foreignKey: "user_id"
    });
  };
  return payment;
};