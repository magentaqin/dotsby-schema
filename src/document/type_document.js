const sectionSchema = require('../section/type_section');

const schema = {
  type: 'object',
  title: 'Document Model',
  required: [
    'id',
    'document_id',
    'version',
    'title',
    'created_at',
    'updated_at',
    'user_id',
  ],
  properties: {
    id: {
      type: 'number',
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
    user_id: {
      type: 'number',
      minimum: 1,
      description: 'foreign key. id of users table.',
    }
  },
}

module.exports = {
  schema,
};
