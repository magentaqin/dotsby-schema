const schema = {
  type: 'object',
  title: 'Api Content',
  required: [

  ],
  properties: {
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'title of Api',
    },
    request_url: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'Request Url',
    },
    method: {
      type: 'string',
      description: 'Request Method',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
    },
    request_headers: {

    },
    body: {

    },
    query_params: {

    },
    responses: {

    },
  },
}

module.exports = {
  schema,
};
