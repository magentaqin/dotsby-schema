const { created_at_def, updated_at_def, created_at_key, updated_at_key } = require('../../utils/types')

const schema = {
  type: 'object',
  title: 'Section Model',
  required: [
    'id',
    'section_id',
    'order_index',
    'page_info',
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
    section_id: {
      type: 'string',
      minLength: 1,
      maxLength: 255,
      format: 'ascii_printable',
      description: 'generated section id',
    },
    order_index: {
      type: 'number',
      minimum: 0,
      description: 'section order index',
    },
    page_info: {
      type: 'string',
      format: 'ascii_printable',
      description: 'stringified page info',
    },
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'title of section',
    },
    [created_at_key]: created_at_def,
    [updated_at_key]: updated_at_def,
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
