const { version_regx } = require('../../utils/types');

const schema = {
  type: 'object',
  title: 'Create Document Params Type',
  required: [
    'title',
    'version',
  ],
  properties: {
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'title of document'
    },
    version: {
      type: 'string',
      pattern: version_regx,
      description: 'version of document',
    },
  }
};


module.exports = {
  schema,
};
