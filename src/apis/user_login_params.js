const schema = {
  type: 'object',
  title: 'Login Params',
  required: [
    'email',
    'password',
  ],
  properties: {
    email: {
      type: 'string',
      pattern: '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/',
      description: 'email',
    },
    password: {
      type: 'string',
      minLength: 6,
      maxLength: 20,
      pattern: '/^[a-zA-Z0-9]{6,20}$/',
      description: 'password',
    },
  },
}

module.exports = {
  schema,
};
