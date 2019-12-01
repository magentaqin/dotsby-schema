const apiItemSchema = require('./type_api_item');

const schema = {
  type: 'object',
  title: 'Api Content Response',
  required: [
    'key',
    'status',
  ],
  properties: {
    key: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'key of response',
    },
    status: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'status of response',
    },
    description: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'description of response',
    },
    headers: {
      type: 'array',
      description: 'response headers',
      minItems: 0,
      items: apiItemSchema.schema,
    },
    data: {
      type: 'array',
      description: 'response data',
      minItems: 0,
      items: apiItemSchema.schema,
    },
  },
}

module.exports = {
  schema,
};
