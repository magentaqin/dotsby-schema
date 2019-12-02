const schema = {
  type: 'object',
  title: 'User Model',
  required: [
    'id',
    'token',
    'username',
    'created_at',
    'updated_at',
  ],
  properties: {
    id: {
      type: 'number',
      minimum: 1,
      description: 'auto increment user id',
    },
    username: {
      type: 'string',
      minLength: 1,
      maxLength: 20,
      format: 'ascii_printable',
      description: 'user name',
    },
    token: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      format: 'ascii_printable',
      description: 'user token',
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
  },
}

module.exports = {
  schema,
};
