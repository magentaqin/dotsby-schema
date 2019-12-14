const loginRespSchema = require('./user_login_response')

const schema = JSON.parse(JSON.stringify(loginRespSchema.schema))

schema.title = 'User Info Response';

module.exports = {
  schema,
}