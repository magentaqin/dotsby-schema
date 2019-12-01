const schema = {
  type: 'object',
  title: 'Page Model',
  required: [

  ],
  properties: {
    id: {
      type: 'minimum',
      minimum: 1,
      description: 'auto increment page id',
    },
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'title of page',
    },
    is_root_path: {
      type: 'boolean',
      description: 'whether this page is the index page',
    },
    content: {
      type: 'string',
      minLength: 1,
      format: 'ascii_printable',
      description: 'page content',
    },
    apiContent: {

    },
    headers: {

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
