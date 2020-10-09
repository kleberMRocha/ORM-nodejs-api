const database = require("../models");

class PessoaController {
  static async GetPessoas(req, res) {
    try {
      const pessoas = await database.Pessoas.findAll();
      return res.status(200).json(pessoas);
    } catch (err) {
      return res.status(200).json(err.message);
    }
  }
  static async GetUmaPessoa(req, res) {
    const { id } = req.params;

    try {
      const umaPessoa = await database.Pessoas.findOne({ where: {id: Number(id),},});
      return res.status(200).json(umaPessoa);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async CreatePessoa(req,res){
      try {
        const novaPessoa = req.body;
        const resultado = await database.Pessoas.create(novaPessoa);
        return res.status(200).json(resultado);
          
      } catch (err) {
        res.status(500).json(err.message);
          
      }
  }
  static async UpdatePessoa(req,res){
      const {id} = req.params; 
      const updatePessoa = req.body;

      try {
        database.Pessoas.update(updatePessoa,{ where: { id:Number(id) } });
        return res.status(200).json(updatePessoa);
        
      } catch (err) {
        res.status(500).json(err.message);
          
      }

  }
  static async DeletePessoa(req,res){
      const {id} = req.params; 
      
      try {
          await database.Pessoas.destroy({ where: { id:Number(id) }} );
          return res.status(200).json({message:"Dados Deletados com sucesso!"})
          
      } catch (err) {
        res.status(500).json(err.message);
          
      }
  }
}

module.exports = PessoaController;