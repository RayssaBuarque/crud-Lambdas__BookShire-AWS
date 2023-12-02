const { conn } = require('./db');

// Ler registro com base em id do anúncio
const readOnly = (id) => {
    return new Promise(function (resolve, reject) {
        conn.query('SELECT * FROM anuncios WHERE Id_anuncio = ?', [id], (err, rows) => {
            if (err) 
              return reject(err);
            
            return resolve(rows);
        });
    });
};

const readFinds = (q) => {
    return new Promise(function (resolve, reject) {
        
        if ("Id_usuario" in q){
            conn.query('SELECT * FROM anuncios WHERE Id_usuario = ? AND anuncio_status != "removido";', [q.Id_usuario], (err, rows) => {
                if (err) 
                  return reject(err);
            
                return resolve(rows);
            });    
        }
        else if("Id_livro" in q){
            conn.query('SELECT * FROM anuncios WHERE Id_livro = ? AND anuncio_status = "aberto"', [q.Id_livro], (err, rows) => {
                if (err) 
                  return reject(err);
            
                return resolve(rows);
            });  
        }
        
        
    });
};

module.exports = { readOnly, readFinds };
