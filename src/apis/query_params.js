const { version_regx } = require('../../utils/types');

const schema = {
  title: 'Query Params',
  type: 'object',
  required: [
    'document_id',
    'version',
    'query_type',
    'search_string',
  ],
  properties: {
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
    query_type: {
      type: 'string',
      enum: ['TEXT', 'REQUEST_URI', 'FIELD'],
      description: 'query type',
    },
    search_string: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'search keyword',
    },
    limit: {
      type: 'number',
      minimum: 1,
      description: 'max number of query results'
    }
  }
}

module.exports = {
  schema,
}