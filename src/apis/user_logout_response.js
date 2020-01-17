const loginRespSchema = require('./user_login_response')
const { omitKeys } = require('../../utils/objHelper');
const { omitArrElements } = require('../../utils/arrayHelper')

const schema = JSON.parse(JSON.stringify(loginRespSchema.schema))

schema.title = 'User Logout Response';
schema.required = omitArrElements(schema.required, ['status']);
schema.properties = omitKeys(schema.properties, ['status'])

module.exports = {
  schema,
}