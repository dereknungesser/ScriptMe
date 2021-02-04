'use strict';
module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define('Character', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    location: DataTypes.STRING,
    bio: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Character.associate = function(models) {
    Character.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Character;
};
