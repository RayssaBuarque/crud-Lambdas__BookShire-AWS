// Requerindo conexão do arquivo db
const { conn } = require('./db');

// CREATE
const createRecord = (data) => {
    return new Promise(function (resolve, reject) {
        conn.query('INSERT INTO pedido (Id_anunciante, Id_cliente, Id_anuncio, dataSolicitacao) VALUES (?, ?, ?, NOW())', [data.Id_anunciante, data.Id_cliente, data.Id_anuncio], (err) => {
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
