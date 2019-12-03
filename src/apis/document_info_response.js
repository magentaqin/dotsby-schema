const documentSchema = require('../document/type_document');
const sectionSchema = require('../section/type_section');
const pagesSchema = require('../page/type_page');

const document = JSON.parse(JSON.stringify(documentSchema.schema));
const section = JSON.parse(JSON.stringify(sectionSchema.schema));
const page = JSON.parse(JSON.stringify(pagesSchema.schema))

page.required = ['id', 'title', 'path'];
section.properties.pages.items = page;
document.title = 'Get Document Info'
document.properties.sections.items = section;

module.exports = {
  schema: document,
}