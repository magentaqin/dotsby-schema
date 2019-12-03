const pagesSchema = require('../page/type_page');

const page = JSON.parse(JSON.stringify(pagesSchema.schema));
page.title = 'Get Page Info Response';

module.exports = {
  schema: page,
}