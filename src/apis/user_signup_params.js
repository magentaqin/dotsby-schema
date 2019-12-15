const { email_regx, password_regx } = require('../../utils/types')
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
      pattern: email_regx,
      format: 'email',
      description: 'email',
    },
    password: {
      type: 'string',
      minLength: 6,
      maxLength: 20,
      pattern: password_regx,
      description: 'password',
    },
  },
}

module.exports = {
  schema,
};
