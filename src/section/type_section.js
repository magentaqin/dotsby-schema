const schema = {
  type: 'object',
  title: 'Section Model',
  required: [
    'id',
    'title',
    'pages',
    'created_at',
    'updated_at',
  ],
  properties: {
    id: {
      type: 'minimum',
      minimum: 1,
      description: 'auto increment section id',
    },
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'title of section',
    },
    pages: {

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
