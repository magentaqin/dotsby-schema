const schema = {
  type: 'object',
  title: 'Signup Params',
  required: [
    'email',
    'password',
  ],
  properties: {
    email: {
      type: 'string',
      format: '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/',
      description: 'email',
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
