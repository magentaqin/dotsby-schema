const userSchema = require('../user/type_user')

const user = JSON.parse(JSON.stringify(userSchema.schema))

user.title = 'User Info Response';

module.exports = {
  schema: user,
}