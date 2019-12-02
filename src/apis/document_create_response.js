const schema = {
  type: 'object',
  title: 'Create Document Response Type',
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
      type: 'number',
      minimum: 0,
      description: 'version of document',
    },
  },
}

module.exports = {
  schema,
};
