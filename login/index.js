// Requerindo a função de login
const { login } = require('./lib/login')

const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');

// Rota base da API
const baseUrl = '/login';

const accessibility = {
        "Access-Control-Allow-Headers" : "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"    
    } 

// Inicialização do Express
const app = express();
app.use(bodyParser.json());

// Retornando id do usuário caso ele for aprovado
app.post(`${baseUrl}/`, (req, res) => {
    res.set(accessibility);
    login(req.body)
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
