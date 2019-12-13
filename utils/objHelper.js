const omitKeys = (obj, keysToOmit) => {
  const newObj = {}
  Object.keys(obj).forEach(key => {
    if (!keysToOmit.includes(key)) {
      newObj[key] = obj[key]
    }
  })
  return newObj;
}

module.exports = {
  omitKeys,
}