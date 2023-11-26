const { conn } = require('./db');

// Ler registros
const readAll = (q) => {
    return new Promise(function (resolve, reject) {
        
        if("Id_cliente" in q && "Id_anuncio" in q){
            conn.query('SELECT * FROM pedido WHERE Id_cliente = ? AND Id_anuncio = ?', [q.Id_cliente, q.Id_anuncio], (err, rows) => {
            if (err) 
              return reject(err);
            
            return resolve(rows);
        });    
        }
        
        else if("Id_cliente" in q){
            conn.query('SELECT * FROM pedido WHERE Id_cliente = ?', [q.Id_cliente], (err, rows) => {
            if (err) 
              return reject(err);
            
            return resolve(rows);
        });    
        }
        
        else if("Id_pedido" in q){
            conn.query('SELECT * FROM pedido WHERE Id_pedido = ?', [q.Id_pedido], (err, rows) => {
            if (err) 
              return reject(err);
            
            return resolve(rows);
        });    
        }
        else if("Id_anunciante" in q){
            conn.query('SELECT * FROM pedido WHERE Id_anunciante = ?', [q.Id_anunciante], (err, rows) => {
                if (err) 
                  return reject(err);
            
                return resolve(rows);
            });  
        }
        else if("Id_anuncio" in q){
            conn.query('SELECT * FROM pedido WHERE Id_anuncio = ?', [q.Id_anuncio], (err, rows) => {
                if (err) 
                  return reject(err);
            
                return resolve(rows);
            });  
        }
        
    });
};

module.exports = { readAll };
