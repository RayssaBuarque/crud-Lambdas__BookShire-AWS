const { conn } = require('./db');

// Ler registro com base em id do anúncio
const readOnly = (id) => {
    return new Promise(function (resolve, reject) {
        conn.query('SELECT * FROM endereco WHERE Id_endereco = ?', [id], (err, rows) => {
            if (err) 
              return reject(err);
            
            return resolve(rows);
        });
    });
};

const readFind = (q) => {
    return new Promise(function (resolve, reject) {
        
        if("Id_usuario" in q){
            conn.query('SELECT * FROM endereco WHERE Id_usuario = ?', [q.Id_usuario], (err, rows) => {
            if (err) 
              return reject(err);
            
            return resolve(rows);
        });    
        }
        
    });
};

module.exports = { readOnly, readFind };
