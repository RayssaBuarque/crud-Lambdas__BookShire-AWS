// Recolhendo cada uma das funções desenvolvidas e exportando de um lugar só
const { createRecord } = require('./create');
const { readAll } = require('./read');

module.exports = { createRecord, readAll };
