const schema = {
  type: 'object',
  title: 'Page Info Params',
  required: [
    'id'
  ],
  properties: {
    id: {
      type: 'number',
      minimum: 1,
      description: 'auto increment page id',
    },
  },
}

module.exports = {
  schema,
};
