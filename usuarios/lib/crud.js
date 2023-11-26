// Recolhendo cada uma das funções desenvolvidas e exportando de um lugar só
const { createRecord } = require('./create');
const { readAll, readOnly } = require('./read');
const { updateRecord } = require('./update');
const { deleteRecord } = require('./delete');

module.exports = { createRecord, readAll, readOnly, updateRecord, deleteRecord };
