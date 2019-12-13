const schema = {
  title: "response with pagination",
  additionalProperties: false,
  type: "object",
  required: [
    "page",
    "pages",
    "limit",
    "count"
  ],
  properties: {
    page: {
      type: "integer",
      description: "current page number"
    },
    pages: {
      type: "integer",
      description: "total page number"
    },
    limit: {
      type: "integer",
      description: "number of items per page"
    },
    count: {
      type: "integer",
      description: "total count of items"
    }
  }
}

module.exports = {
  schema
}