export const convertObj = (object = {}, path = '') => {
  return Object.keys(object).reduce((acc, property) => {
    if (property !== '__init__') {
      if (typeof object[property] === 'object') {
        acc[property] = convertObj(object[property], `${path}${property}.`)
      } else {
        acc[property] = path + property
      }
    }
    return acc
  }, {})
}
