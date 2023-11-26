// Requerindo funções de Crud do arquivo Crud
const { readOnly, readFind } = require('./lib/crud')

const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');

// Rota base da API
const baseUrl = '/endereco';

// Inicialização do Express
const app = express();
app.use(bodyParser.json());

// CORS permissions
const accessibility = {
        "Access-Control-Allow-Headers" : "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"    
    };


// Retorna um endereço específico com base em um id de ENDEREÇO
app.get(`${baseUrl}/:id`, (req, res) => {
    res.set(accessibility);
    readOnly(req.params.id)
        .then (
            function (result) { 
                return res.status(200).json(result);
            }
        ).catch (
            (err) => { 
                return res.status(500).json(err); 
            }
        ); 
});

// Retorna um endereço específico com base em um id de USUÁRIO
app.get(`${baseUrl}`, (req, res) => {
    res.set(accessibility);
    readFind(req.query)
        .then (
            function (result) { 
                return res.status(200).json(result);
            }
        ).catch (
            (err) => { 
                return res.status(500).json(err); 
            }
        ); 
});
    
// Inicializa serverless proxy e express app
const handler = serverless(app);

const startServer = async () => {
    app.listen(3000, () => {
      console.log("listening on port 3000!");
    });
}

startServer();

module.exports.handler = (event, context, callback) => {
    return handler(event, context, callback);
};
