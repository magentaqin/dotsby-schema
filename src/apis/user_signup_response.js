const userSchema = require('../user/type_user')

const user = JSON.parse(JSON.stringify(userSchema.schema))

user.title = 'User Signup Response';

module.exports = {
  schema: user,
}