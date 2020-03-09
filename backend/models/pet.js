'use strict';
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define('pet', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    spesies: DataTypes.STRING,
    age: DataTypes.ENUM("child", "teneger", "adult"),
    user: DataTypes.STRING,
    about_pet: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {});
  pet.associate = function(models) {
     pet.belongsTo(models.spesies, {
      as: "spes",
      foreignKey: "spesies"
    });
      pet.belongsTo(models.user, {
      as: "use",
      foreignKey: "user"
    });
      pet.belongsToMany(pet, {
      through: models.match,
      as: "pet_id",
      foreignKey: "pet_id"
    });
    pet.belongsToMany(pet, {
      through: models.match,
      as: "pet_id_liked",
      foreignKey: "pet_id_liked"
    });
  };
  return pet;
};