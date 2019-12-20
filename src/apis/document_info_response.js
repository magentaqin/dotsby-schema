const documentSchema = require('../document/type_document');
const sectionSchema = require('../section/type_section');
const pagesSchema = require('../page/type_page');
const { omitKeys } = require('../../utils/objHelper');
const { omitArrElements } = require('../../utils/arrayHelper')

const document = JSON.parse(JSON.stringify(documentSchema.schema));
const section = JSON.parse(JSON.stringify(sectionSchema.schema));
const page = JSON.parse(JSON.stringify(pagesSchema.schema))

page.required = omitArrElements(page.required, 'section_id');
page.properties = omitKeys(page.properties, ['section_id']);

section.required = omitArrElements(section.required, ['doc_id'])
section.properties = omitKeys(section.properties, ['doc_id'])
section.required.push('pages');
section.properties.pages = {
  type: 'array',
  description: 'pages of section',
  minItems: 1,
  items: page,
}

document.title = 'Get Document Info';
document.required = omitArrElements(document.required, ['user_id']);
document.required.push('sections');
document.properties = omitKeys(document.properties, ['user_id'])
document.properties.sections = {
  type: 'array',
  description: 'sections of document',
  minItems: 1,
  items: section,
};

module.exports = {
  schema: document,
}