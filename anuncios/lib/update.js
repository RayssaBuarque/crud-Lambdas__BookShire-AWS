const { conn } = require('./db');

const updateRecord = (data, id) => {
    return new Promise(function (resolve, reject) {
        
        conn.query('UPDATE anuncios SET anuncio_status = ? WHERE Id_anuncio = ?', [data.anuncio_status, id], (err) => {
        if (err)
            return reject(err);
            
        return resolve();
        });   
    
    });
};

module.exports = { updateRecord };
