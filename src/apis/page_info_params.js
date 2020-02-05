const schema = {
  type: 'object',
  title: 'Page Info Params',
  required: [
    'document_id',
    'page_id',
  ],
  properties: {
    document_id: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      format: 'ascii_printable',
      description: 'generated document id',
    },
    page_id: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      format: 'ascii_printable',
      description: 'generated page id',
    },
  },
}

module.exports = {
  schema,
};
