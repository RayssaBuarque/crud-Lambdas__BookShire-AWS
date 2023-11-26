// Requerindo conexão do arquivo db
const { conn } = require('./db');

// CREATE
const createRecord = (data) => {
    return new Promise(function (resolve, reject) {
        conn.query('INSERT INTO denuncia (Id_pedido, Id_usuario, tituloDenuncia, mensagem, status_denuncia) VALUES (?, ?, ?, ?, "aberto")', [data.Id_pedido, data.Id_usuario, data.tituloDenuncia, data.mensagem], (err) => {
            if (err)
                return reject(err);
            
            let result = {
                id: conn.insertId
            };
            
            return resolve(result);
        });
    });
};

module.exports = { createRecord }
