'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    userId: DataTypes.INTEGER,
    project_name: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    Project.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Project;
};
