
const pessoas = require('./pessoasRoute');
const turma = require('./turmasRoute');
const niveis = require('./niveisRoute');

module.exports = (app) =>{
  app.use(pessoas,niveis,turma);
}