const apiContentSchema = require('./type_api_content');

const schema = {
  type: 'object',
  title: 'Page Model',
  required: [
    'id',
    'title',
    'is_root_path',
    'path',
    'created_at',
    'updated_at',
  ],
  properties: {
    id: {
      type: 'minimum',
      minimum: 1,
      description: 'auto increment page id',
    },
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'title of page',
    },
    is_root_path: {
      type: 'boolean',
      description: 'whether this page is the index page',
    },
    path: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'page path',
    },
    content: {
      type: 'string',
      minLength: 1,
      format: 'ascii_printable',
      description: 'page content',
    },
    apiContent: apiContentSchema,
    headers: {
      type: 'array',
      description: 'headers extracted from page',
      minItems: 1,
      items: {
        type: 'string',
        minLength: 1,
        maxLength: 50,
        format: 'ascii_printable',
        description: 'extracted header of page',
      }
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
