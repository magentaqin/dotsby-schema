const { version_regx } = require('../../utils/types');

const schema = {
  type: 'object',
  title: 'Publish Document Response Type',
  required: [
    'document_id',
    'version',
  ],
  properties: {
    document_id: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      format: 'ascii_printable',
      description: 'generated document id',
    },
    version: {
      type: 'string',
      pattern: version_regx,
      description: 'version of document',
    },
  },
}

module.exports = {
  schema,
};
