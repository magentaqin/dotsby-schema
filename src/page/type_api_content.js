const apiItemSchema = require('./type_api_item')
const responseSchema = require('./type_api_content_response')

const schema = {
  type: 'object',
  title: 'Api Content',
  required: [
    'title',
    'request_url',
    'method',
    'request_headers',
    'body',
    'query_params',
    'responses',
  ],
  properties: {
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'title of Api',
    },
    request_url: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'Request Url',
    },
    method: {
      type: 'string',
      description: 'Request Method',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
    },
    request_headers: {
      type: 'array',
      description: 'request headers',
      minItems: 0,
      items: apiItemSchema.schema,
    },
    body: {
      type: 'array',
      description: 'request body',
      minItems: 0,
      items: apiItemSchema.schema,
    },
    query_params: {
      type: 'array',
      description: 'query params',
      minItems: 0,
      items: apiItemSchema.schema,
    },
    responses: {
      type: 'array',
      description: 'current api responses',
      minItems: 0,
      items: responseSchema.schema,
    },
  },
}

module.exports = {
  schema,
};
