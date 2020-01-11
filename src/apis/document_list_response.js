const documentSchema = require('../document/type_document');
const { version_regx } = require('../../utils/types');
const { omitKeys } = require('../../utils/objHelper');
const { omitArrElements } = require('../../utils/arrayHelper');

const document = JSON.parse(JSON.stringify(documentSchema.schema));

document.required = omitArrElements(document.required, ['sections', 'user_id', 'id']);
document.properties = omitKeys(document.properties, ['sections', 'user_id', 'id']);

document.required = [...document.required, 'all_versions'];
document.properties = {
  ...document.properties,
  all_versions: {
    type: 'array',
    minItems: 1,
    items: {
      type: 'string',
      pattern: version_regx,
      description: 'version of document',
    }
  }
}

const schema = {
  title: 'Get Document List Response',
  type: 'array',
  minItems: 0,
  items: document,
}

module.exports = {
  schema,
}