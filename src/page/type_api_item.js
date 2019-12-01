const restProperties = {
  key: {
    type: 'string',
    minLength: 1,
    maxLength: 50,
    format: 'ascii_printable',
    description: 'key of ApiItem',
  },
  type: {
    type: 'string',
    minLength: 1,
    format: 'ascii_printable',
    description: 'ApiItem Type. Could be stringified json schema.',
    example: 'object/string/number'
  },
  required: {
    type: 'boolean',
    description: 'whether this field is required',
  },
  description: {
    type: 'string',
    minLength: 1,
    maxLength: 1000,
    format: 'ascii_printable',
    description: 'description of ApiItem',
  },
  displayName: {
    type: 'string',
    minLength: 1,
    maxLength: 50,
    format: 'ascii_printable',
    description: 'display name of ApiItem',
  },
  examples: {
    type: 'array',
    description: 'examples of api item',
    minItems: 1,
    items: {
      type: 'string',
      minLength: 1,
      maxLength: 1000,
      format: 'ascii_printable',
      description: 'api item example',
    }
  },
}
const schema = {
  type: 'object',
  title: 'Api Item',
  required: [
    'key',
    'type',
    'required',
  ],
  properties: {
    properties: {
    type: 'object',
    title: 'Nested Api Item',
    required: [
      'key',
      'type',
      'required',
    ],
    properties: {
      ...restProperties,
    }
  },
    ...restProperties,
  },
}

module.exports = {
  schema,
};
