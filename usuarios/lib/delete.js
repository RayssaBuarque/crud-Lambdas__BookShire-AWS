const { conn } = require('./db');

const deleteRecord = (id) => {
    return new Promise(function (resolve, reject) {
        conn.query('DELETE FROM usuarios WHERE Id_usuario = ?', [id], (err) => {
            if (err) 
                return reject(err);
                
            return resolve();
        });
    });
};

module.exports = { deleteRecord };
