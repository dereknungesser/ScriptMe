'use strict';
module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    userId: DataTypes.INTEGER,
    document_name: DataTypes.STRING,
    document_body: DataTypes.STRING,
    projectId: DataTypes.INTEGER
  }, {});
  Document.associate = function(models) {
    Document.belongsTo(models.User, { foreignKey: "userId" });
    Document.belongsTo(models.Project, { foreignKey: "projectId" });
  };
  return Document;
};
