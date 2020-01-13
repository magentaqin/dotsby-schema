const { created_at_def, updated_at_def } = require('../../utils/types')

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
    created_at_def,
    updated_at_def,
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
