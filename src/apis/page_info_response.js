const pagesSchema = require('../page/type_page');
const { omitKeys } = require('../../utils/objHelper');
const { omitArrElements } = require('../../utils/arrayHelper')

const page = JSON.parse(JSON.stringify(pagesSchema.schema));
page.title = 'Get Page Info Response';
page.required = omitArrElements(page.required, 'section_id');
page.properties = omitKeys(page.properties, ['section_id']);

module.exports = {
  schema: page,
}