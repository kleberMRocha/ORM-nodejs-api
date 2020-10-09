
const pessoas = require('./pessoasRoute');

module.exports = (app) =>{
  app.use(pessoas);
 
}