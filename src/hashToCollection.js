
const keys = Object.keys || require('object-keys')

export default (obj = {}, key = 'key') =>
  keys(obj).map(i => {
    const value = obj[i]
    if (typeof value !== 'object') {
      return { [key]: i, value }
    }
    return { [key]: i, ...value }
  })
