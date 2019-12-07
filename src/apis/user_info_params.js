const schema = {
  type: 'object',
  title: 'Get User Info Params',
  required: [
    'token'
  ],
  properties: {
    token: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      format: 'ascii_printable',
      description: 'user token',
    },
  },
}

module.exports = {
  schema,
};
