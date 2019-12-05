const schema = {
  type: 'object',
  title: 'Generate new document id',
  required: [
    'document_id',
  ],
  properties: {
    document_id: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      format: 'ascii_printable',
      description: 'generated document id',
    },
  },
}

module.exports = {
  schema,
};
