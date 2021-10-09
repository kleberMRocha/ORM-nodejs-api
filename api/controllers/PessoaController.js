const database = require("../models");

class PessoaController {
  static async GetPessoasAtivas(req, res) {
    try {
      const pessoas = await database.Pessoas.findAll();
      return res.status(200).json(pessoas);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
  static async GetPessoas(req, res) {
    try {
      const pessoas = await database.Pessoas.scope('todos').findAll();
      return res.status(200).json(pessoas);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
  static async GetUmaPessoa(req, res) {
    const { id } = req.params;

    try {
      const umaPessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umaPessoa);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async CreatePessoa(req, res) {
    try {
      const novaPessoa = req.body;
      const resultado = await database.Pessoas.create(novaPessoa);
      return res.status(200).json(resultado);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async UpdatePessoa(req, res) {
    const { id } = req.params;
    const updatePessoa = req.body;

    try {
      database.Pessoas.update(updatePessoa, { where: { id: Number(id) } });
      return res.status(200).json(updatePessoa);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async DeletePessoa(req, res) {
    const { id } = req.params;

    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: "Dados Deletados com sucesso!" });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async restauraPessoa(req, res) {
    const { id } = req.params;
    try {

      await database.Pessoas.restore({ where: { id: Number(id) } })
      return res.status(200).json({ message: 'Pessoa Restaurada' })

    } catch (error) {
      res.status(500).json(error.message);

    }

  }
  //matriculas
  static async GetMatricula(req, res) {
    const { id, matriculaId } = req.params;

    try {
      const matricula = await database.Matricula.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(id),
        },
      });
      return res.status(200).json(matricula);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async CreateMatricula(req, res) {
    try {
      const { id } = req.params;
      const novaMatricula = { ...req.body, estudante_id: Number(id) };

      const resultado = await database.Matricula.create(novaMatricula);
      return res.status(200).json(resultado);

    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async updateMatricula(req, res) {
    const { id, matriculaId } = req.params;
    const updateMatricula = req.body;

    console.log(updateMatricula);

    try {
      database.Matricula.update(updateMatricula, {
        where: {
          id: Number(matriculaId),
          estudante_id: Number(id),
        },
      });
      return res.status(200)
        .json(updateMatricula);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async DeleteMatricula(req, res) {
    const { id, matriculaId } = req.params;

    try {
      await database.Matricula.destroy({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(id),
        },
      });
      return res.status(200).json({ message: "Dados Deletados com sucesso!" });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async GetMatriculasAtivas(req, res) {
    const { id } = req.params;

    try {
      const matricula = await database.Matricula.findAll({
        where: {
          estudante_id: Number(id),
          status: 'confirmado'
        },
      });
      return res.status(200).json(matricula);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

}

module.exports = PessoaController;
