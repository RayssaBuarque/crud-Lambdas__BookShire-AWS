// Recolhendo cada uma das funções desenvolvidas e exportando de um lugar só
const { createRecord } = require('./create');
const { readAll } = require('./read');
const { updateRecord } = require('./update');

module.exports = { readAll, createRecord, updateRecord };
