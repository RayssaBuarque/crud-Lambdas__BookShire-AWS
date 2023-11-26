const { conn } = require('./db');

// Ler registros com base em id do PEDIDO
const readAll = (id) => {
    return new Promise(function (resolve, reject) {
        conn.query('SELECT Id_pedido, Id_usuario FROM denuncia WHERE Id_pedido = ?', [id], (err, rows) => {
            if (err) 
              return reject(err);
            
            return resolve(rows);
        });
    });
};


module.exports = { readAll };
