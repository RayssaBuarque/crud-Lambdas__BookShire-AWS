// Requerindo conexão do arquivo db
const { conn } = require('./db');

// CREATE
const createRecord = (data) => {
    return new Promise(function (resolve, reject) {
        conn.query('INSERT INTO usuarios (nome, email, senha, telefone, fotoUsuario) VALUES (?, ?, ?, ?, ?)', [data.nome, data.email, data.senha, data.telefone, data.fotoUsuario], (err) => {
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
