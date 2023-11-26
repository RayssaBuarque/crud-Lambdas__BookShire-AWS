// Recolhendo cada uma das funções desenvolvidas e exportando de um lugar só
const { createRecord } = require('./create');
const { readOnly, readFinds } = require('./read');
const { updateRecord } = require('./update');

module.exports = { readOnly, readFinds, createRecord, updateRecord };
