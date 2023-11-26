const { conn } = require('./db');

// Ler registros com base em id do PEDIDO
const login = (q) => {
    return new Promise(function (resolve, reject) {
        conn.query('SELECT Id_usuario FROM usuarios WHERE email = ? AND senha = ?', [q.email, q.senha],  (err, rows) => {
            if (err) 
              return reject(err);
            
            return resolve(rows);
        });
    });
};

module.exports = { login };
