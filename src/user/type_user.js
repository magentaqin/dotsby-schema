const { email_regx } = require('../../utils/types')
const schema = {
  type: 'object',
  title: 'User Model',
  required: [
    'id',
    'email',
    'password_hash',
    'status',
    'created_at',
    'updated_at',
    'last_login_at',
  ],
  properties: {
    id: {
      type: 'number',
      minimum: 1,
      description: 'auto increment user id',
    },
    email: {
      type: 'string',
      pattern: email_regx,
      format: 'email',
      description: 'email',
    },
    password_hash: {
      type: 'string',
      description: 'hash value for password'
    },
    status: {
      type: 'string',
      enum: ['ACTIVE', 'INACTIVE'],
      description: 'status of user',
    },
    created_at: {
      "type": "string",
      "format": "date-time",
      "example": "2019-12-01T16:39:57-08:00",
      "description": "time created at"
    },
    updated_at: {
      "type": "string",
      "format": "date-time",
      "example": "2019-12-01T16:39:57-08:00",
      "description": "time updated at"
    },
    last_login_at: {
      "type": "string",
      "format": "date-time",
      "example": "2019-12-01T16:39:57-08:00",
      "description": "last login time"
    }
  },
}

module.exports = {
  schema,
};
