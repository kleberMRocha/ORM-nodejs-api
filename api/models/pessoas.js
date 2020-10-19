"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {
      Pessoas.hasMany(models.Turma, { foreignKey: "docente_id" });
      Pessoas.hasMany(models.Matricula, { foreignKey: "estudante_id" });
    }
  }
  Pessoas.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          len:{
            args:[3, 80],
            msg: "Por favor, Informe um Nome valido! 3 - 80 caracteres",
          } 
        },
      },
      ativo: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "Por favor, Informe um e-mail valido!",
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pessoas",
      paranoid: true,
      defaultScope: {
        where: { ativo: true },
      },
      scopes: {
        todos: { where: {} },
      },
    }
  );
  return Pessoas;
};
