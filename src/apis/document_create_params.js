const sectionSchema = require('../section/type_section');
const pagesSchema = require('../page/type_page');

const section = JSON.parse(JSON.stringify(sectionSchema.schema));
const page = JSON.parse(JSON.stringify(pagesSchema.schema))

page.required = ['title', 'path'];
section.required = ['title', 'pages'];
section.properties.pages.items = page;


const schema = {
  type: 'object',
  title: 'Create Document Params Type',
  required: [
    'document_id',
    'version',
    'title',
    'sections',
  ],
  properties: {
    document_id: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      format: 'ascii_printable',
      description: 'generated document id',
    },
    version: {
      type: 'number',
      minimum: 0,
      description: 'version of document',
    },
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      format: 'ascii_printable',
      description: 'title of document',
    },
    sections: {
      type: 'array',
      description: 'sections of document',
      minItems: 1,
      items: section,
    },
    is_private: {
      type: 'boolean',
      description: 'whether this document is private',
    },
  },
}

module.exports = {
  schema,
};
