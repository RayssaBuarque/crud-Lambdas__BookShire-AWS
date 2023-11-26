// Requerindo funções de Crud do arquivo Crud
const { createRecord, readAll, readOnly, updateRecord, deleteRecord } = require('./lib/crud')

const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');

// Rota base da API
const baseUrl = '/users';

const accessibility = {
        "Access-Control-Allow-Headers" : "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"    
    } 

// Inicialização do Express
const app = express();
app.use(bodyParser.json());

// READ Retorna todos os registros caso o url vier só a base
app.get(`${baseUrl}/`, (req, res) => {
    res.set(accessibility);
    readAll(req.query)
        .then (
            function (result) { 
                return res.status(200).json(result);
            })
        .catch (
            (err) => { 
                return res.status(500).json(err); 
            }); 
});

// READ Retorna um registro específico com base em um id
app.get(`${baseUrl}/:id`, (req, res) => {
    res.set(accessibility);
    
    readOnly(req.params.id)
        .then (
            function (result) { 
                return res.status(200).json(result);
            })
        .catch (
            (err) => { 
                return res.status(500).json(err); 
            }); 
});

// POST Insere um novo registro
app.post(`${baseUrl}/`, (req, res) => {
    res.set(accessibility);
    createRecord(req.body)
        .then (
            function (result) { 
                return res.status(201).json(result);
            })
        .catch (
            (err) => { 
                return res.status(500).json(err); 
            }); 
});

// UPDATE Atualiza um registro
app.put(`${baseUrl}/:id`, (req, res) => {
    updateRecord(req.body, req.params.id)
        .then (
            function (result) { 
                return res.status(200).json();
            }
        )
        .catch (
            (err) => { 
                return res.status(500).json(err); 
            }
        ); 
});

// DELETE Exclui um registro
app.delete(`${baseUrl}/:id`, (req, res) => {
    res.set(accessibility);
    deleteRecord(req.params.id)
        .then (
            function (result) { 
                return res.status(200).json();
            })
        .catch (
            (err) => { 
                return res.status(500).json(err); 
            }); 
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
