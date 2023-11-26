// Requerindo conexão do arquivo db
const { conn } = require('./db');

// CREATE
const createRecord = (data) => {
    return new Promise(function (resolve, reject) {
        conn.query('INSERT INTO anuncios (Id_usuario, Id_livro, transacao, preco, criacao, descricao, situacao, anuncio_status) VALUES (?, ?, ?, ?, NOW(), ?, ?, "aberto")', [data.Id_usuario, data.Id_livro, data.transacao, data.preco, data.descricao, data.situacao], (err) => {
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
