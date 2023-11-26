
const { conn } = require('./db');

// Ler todos os registros
const readAll = () => {
    return new Promise(function (resolve, reject) {
        
        conn.query('SELECT Id_chat, Id_usuario1, Id_usuario2, chat.Id_pedido FROM chat, pedido WHERE chat.Id_pedido = pedido.Id_pedido and pedido.dataConclusao is null;', (err, rows) => {
            if (err) 
              return reject(err);
            
            return resolve(rows);
        });
        
    });
};

// Ler registro específico
const readOnly = (id) => {
    return new Promise(function (resolve, reject) {
        
        conn.query('SELECT * FROM chat WHERE Id_chat = ?', [id], (err, rows) => {
            if (err) 
              return reject(err);
            
            return resolve(rows);
        });
        
    });
};

module.exports = { readAll, readOnly };
