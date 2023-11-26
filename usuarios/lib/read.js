const { conn } = require('./db');

// Ler todos os registros
const readAll = (q) => {
    return new Promise(function (resolve, reject) {
        
        if('get_Sebos' in q){
            
            if('idSebo' in q){
             conn.query('SELECT * FROM usuario_PJ WHERE Id_usuario = ?', [q.idSebo], (err, rows) => {
                if (err) 
                  return reject(err);
            
                return resolve(rows);
            });             
            }else{
             conn.query('SELECT * FROM usuario_PJ', (err, rows) => {
                if (err) 
                  return reject(err);
            
                return resolve(rows);
            });
            }
        }
        else{
            conn.query('SELECT Id_usuario, nome, fotoUsuario, mediaAvaliacao FROM usuarios', (err, rows) => {
                if (err) 
                  return reject(err);
            
                return resolve(rows);
            });
        }
    });
};

// Ler registros com base em id
const readOnly = (id) => {
    return new Promise(function (resolve, reject) {
        conn.query('SELECT Id_usuario, nome, fotoUsuario, mediaAvaliacao FROM usuarios WHERE Id_usuario = ?', [id], (err, rows) => {
            if (err) 
              return reject(err);
            
            return resolve(rows);
        });
    });
};


module.exports = { readAll, readOnly };
