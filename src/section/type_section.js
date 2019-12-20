const pageSchema = require('../page/type_page');

const schema = {
  type: 'object',
  title: 'Section Model',
  required: [
    'id',
    'title',
    'created_at',
    'updated_at',
    'doc_id',
  ],
  properties: {
    id: {
      type: 'number',
      minimum: 1,
      description: 'auto increment section id',
    },
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'title of section',
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
    doc_id: {
      type: 'number',
      minimum: 1,
      description: 'foreign key. id of docs table.',
    }
  },
}

module.exports = {
  schema,
};
