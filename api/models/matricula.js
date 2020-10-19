'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    static associate(models) {
      Matricula.belongsTo(models.Pessoas,{foreignKey:'estudante_id'});
      Matricula.belongsTo(models.Turma,{foreignKey:'turma_id'});
    }
  };
  Matricula.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matricula',
    paranoid:true,
  });
  return Matricula;
};