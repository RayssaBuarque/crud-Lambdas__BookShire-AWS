const { conn } = require('./db');

const updateRecord = (data, id) => {
    return new Promise(function (resolve, reject) {
        
        conn.query('UPDATE pedido SET notaAvaliacao = ?, dataConclusao = NOW() WHERE Id_pedido = ?', [data.notaAvaliacao, id], (err) => {
        if (err)
            return reject(err);
            
        return resolve();
        });   
    
    });
};

module.exports = { updateRecord };
