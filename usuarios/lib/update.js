const { conn } = require('./db');

const updateRecord = (data, id) => {
    return new Promise(function (resolve, reject) {
        
        
        conn.query('UPDATE usuarios SET senha = ? WHERE Id_usuario = ?', [data.senha, id], (err) => {
        if (err)
            return reject(err);
            
        return resolve();
        });   
    
    });
};

module.exports = { updateRecord };
