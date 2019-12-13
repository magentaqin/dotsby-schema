const documentSchema = require('../document/type_document');
const { omitKeys } = require('../../utils/objHelper');
const { omitArrElements } = require('../../utils/arrayHelper');

const document = JSON.parse(JSON.stringify(documentSchema.schema));

document.required = omitArrElements(document.required, ['sections']);
document.properties = omitKeys(document.properties, ['sections']);

const schema = {
  title: 'Get Document List Response',
  type: 'array',
  minItems: 0,
  items: document,
}

module.exports = {
  schema,
}