const schema = {
  type: 'object',
  title: 'Signup Params',
  required: [
    'username',
    'password',
  ],
  properties: {
    username: {
      type: 'string',
      minLength: 1,
      maxLength: 20,
      format: 'ascii_printable',
      description: 'user name',
    },
    password: {
      type: 'string',
      minLength: 6,
      maxLength: 20,
      format: '/^[a-zA-Z0-9]{6,20}$/',
      description: 'password',
    },
  },
}

module.exports = {
  schema,
};
