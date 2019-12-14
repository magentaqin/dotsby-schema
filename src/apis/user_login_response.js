const userSchema = require('../user/type_user')
const { omitKeys } = require('../../utils/objHelper');
const { omitArrElements } = require('../../utils/arrayHelper')

const user = JSON.parse(JSON.stringify(userSchema.schema))

user.title = 'User Login Response';
user.required = omitArrElements(user.required, ['id','password_hash'])
user.required = [...user.required, 'token']
user.properties = omitKeys(user.properties, ['id', 'password_hash'])
user.properties = {
  ...user.properties,
  token: {
    type: 'string',
    minLength: 1,
    maxLength: 100,
    format: 'ascii_printable',
    description: 'user token',
  },
}

module.exports = {
  schema: user,
}