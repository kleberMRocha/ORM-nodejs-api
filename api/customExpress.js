const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

require('dotenv').config();

module.exports = (() =>{
    const port = process.env.NODE_PORT;
    const app = express();
    app.use(bodyParser.json());
    routes(app);
    app.listen(port,()=> console.log(`servidor rodando na porta ${port}`));
    return app;
    
});