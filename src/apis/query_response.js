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
      header: {
        type: 'string',
        description: 'header of page part where keywork lies in',
      },
      api_category: {
        type: 'string',
        enum: ['REQUEST_HEADERS','REQUEST_BODY', 'QUERY_PARAMS', 'RESPONSE_HEADERS', 'RESPONSE_DATA'],
        description: 'category where api field belongs to',
      }
    }
  }
}

module.exports = {
  schema,
}