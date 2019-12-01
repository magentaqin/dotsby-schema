const schema = {
  type: 'object',
  title: 'Document Model',
  required: [
    'id',
    'document_id',
    'version',
    'title',
    'sections',
    'created_at',
    'updated_at',
  ],
  properties: {
    id: {
      type: 'minimum',
      minimum: 1,
      description: 'auto increment document id',
    },
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
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'title of document',
    },
    sections: {

    },
    is_private: {
      type: 'boolean',
      description: 'whether this document is private',
    },
    created_at: {
      "type": "string",
      "format": "date-time",
      "example": "2019-12-01T16:39:57-08:00",
      "description": "time created at"
    },
    updated_at: {
      "type": "string",
      "format": "date-time",
      "example": "2019-12-01T16:39:57-08:00",
      "description": "time updated at"
    },
  },
}

module.exports = {
  schema,
};
