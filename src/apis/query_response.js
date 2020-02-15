const schema = {
  title: 'Query Response',
  type: 'array',
  minItems: 0,
  items: {
    type: 'object',
    required: [
      'query_type',
      'section_id',
      'page_id',
      'page_title',
      'search_string',
      'anchor',
      'content',
    ],
    properties: {
      query_type: {
        type: 'string',
        enum: ['TEXT', 'REQUEST_URI', 'FIELD'],
        description: 'query type',
      },
      section_id: {
        type: 'string',
        minLength: 1,
        maxLength: 255,
        format: 'ascii_printable',
        description: 'generated section id',
      },
      page_id: {
        type: 'string',
        minLength: 1,
        maxLength: 255,
        format: 'ascii_printable',
        description: 'generated page id',
      },
      page_title: {
        type: 'string',
        minLength: 1,
        maxLength: 50,
        format: 'ascii_printable',
        description: 'title of page',
      },
      search_string: {
        type: 'string',
        minLength: 1,
        maxLength: 50,
        format: 'ascii_printable',
        description: 'search keyword',
      },
      anchor: {
        type: 'string',
        description: 'anchor where the window will scroll up to',
      },
      content: {
        type: 'string',
        minLength: 1,
        maxLength: 100,
        description: 'matched content'
      },
    }
  }
}

module.exports = {
  schema,
}