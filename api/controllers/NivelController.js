const database = require("../models");

class NivelController {
  static async GetNiveis(req, res) {
    try {
      const nivel = await database.Niveis.findAll();
      return res.status(200).json(nivel);
    } catch (err) {
      return res.status(200).json(err.message);
    }
  }
  static async GetUmNivel(req, res) {
    const { id } = req.params;

    try {
      const umNivel = await database.Niveis.findOne({ where: {id: Number(id),},});
      return res.status(200).json(umNivel);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async CreateNivel(req,res){
      try {
        const novoNivel = req.body;
        const resultado = await database.Niveis.create(novoNivel);
        return res.status(200).json(resultado);
          
      } catch (err) {
        res.status(500).json(err.message);
          
      }
  }
  static async UpdateNivel(req,res){
      const {id} = req.params; 
      const updateNivel = req.body;

      try {
        database.Niveis.update(updateNivel,{ where: { id:Number(id) } });
        return res.status(200).json(updateNivel);
        
      } catch (err) {
        res.status(500).json(err.message);
          
      }

  }
  static async DeleteNivel(req,res){
      const {id} = req.params; 
      
      try {
          await database.Niveis.destroy({ where: { id:Number(id) }} );
          return res.status(200).json({message:"Dados Deletados com sucesso!"})
          
      } catch (err) {
        res.status(500).json(err.message);
          
      }
  }
}

module.exports = NivelController;
