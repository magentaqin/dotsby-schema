const apiContentSchema = require('./type_api_content');
const { created_at_def, updated_at_def, created_at_key, updated_at_key } = require('../../utils/types')

const schema = {
  type: 'object',
  title: 'Page Model',
  required: [
    'id',
    'title',
    'page_id',
    'is_root_path',
    'path',
    'created_at',
    'updated_at',
    'section_id',
  ],
  properties: {
    id: {
      type: 'number',
      minimum: 1,
      description: 'auto increment page id',
    },
    page_id: {
      type: 'string',
      minLength: 1,
      maxLength: 255,
      format: 'ascii_printable',
      description: 'generated page id',
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
    subtitles: {
      type: 'array',
      description: 'headers extracted from page',
      minItems: 0,
      items: {
        type: 'string',
        minLength: 1,
        maxLength: 50,
        format: 'ascii_printable',
        description: 'extracted header of page',
      }
    },
    [created_at_key]: created_at_def,
    [updated_at_key]: updated_at_def,
    section_id: {
      type: 'number',
      minimum: 1,
      description: 'foreign key. id of sections table.',
    }
  },
}

module.exports = {
  schema,
};
