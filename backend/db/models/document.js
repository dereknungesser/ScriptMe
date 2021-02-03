'use strict';
module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    userId: DataTypes.INTEGER,
    document_name: DataTypes.STRING,
    document_body: DataTypes.STRING,
    documentId: DataTypes.INTEGER
  }, {});
  Document.associate = function(models) {
    Document.belongsTo(models.User, { foreignKey: "userId" })
    Document.belongsTo(models.Project, { foreignKey: "documentId" })
  };
  return Document;
};
