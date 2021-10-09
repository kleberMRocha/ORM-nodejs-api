const database = require("../models");
const { Op } = require('sequelize');

class TurmaController {

  static async GetTurma(req, res) {
    const { data_inicio, data_final } = req.query;

    try {
      const turma = await database.Turma
        .findAll(
          data_inicio && data_final && {
            where: {
              data_inicio: {
                [Op.between]: [data_inicio, data_final]
              }
            }
          });

      return res.status(200).json(turma);
    } catch (err) {
      return res.status(500).json(err.message);
    }

  }

  static async GetUmaTurma(req, res) {
    const { id } = req.params;

    try {
      const umaTurma = await database.Turma.findOne({ where: { id: Number(id), }, });
      return res.status(200).json(umaTurma);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async CreateTurma(req, res) {
    try {
      const novaTurma = req.body;
      const resultado = await database.Turma.create(novaTurma);
      return res.status(200).json(resultado);

    } catch (err) {
      res.status(500).json(err.message);

    }
  }
  static async UpdateTurma(req, res) {
    const { id } = req.params;
    const updateTuma = req.body;

    try {
      database.Turma.update(updateTuma, { where: { id: Number(id) } });
      return res.status(200).json(updateTuma);

    } catch (err) {
      res.status(500).json(err.message);

    }

  }
  static async DeleteTurma(req, res) {
    const { id } = req.params;

    try {
      await database.Turma.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: "Dados Deletados com sucesso!" })

    } catch (err) {
      res.status(500).json(err.message);

    }
  }
}

module.exports = TurmaController;
