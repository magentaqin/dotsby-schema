
const { version_regx, created_at_def, updated_at_def, created_at_key, updated_at_key } = require('../../utils/types')

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
      type: 'string',
      pattern: version_regx,
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
    [created_at_key]: created_at_def,
    [updated_at_key]: updated_at_def,
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
