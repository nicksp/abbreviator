const isAlpha = letter => /^[a-zA-Z]+$/g.test(letter)

module.exports = abbreviator

function abbreviator(sentence, capitalize = false, callback) {
  return new Promise((resolve, reject) => {
    if (sentence.length === 0) {
      const fallbackError = `String expected (e.g. 'for the win'), but saw an empty value`
      reject(fallbackError)
      return callback(fallbackError)
    } else if (typeof sentence === 'function') {
      callback = sentence
      const fallbackError = '¯\\_(ツ)_/¯'
      reject(fallbackError)
      return callback(fallbackError)
    }

    const words = sentence.split(' ')
    const abbr = words.map(word => capitalize && isAlpha(word[0]) ? word[0].toUpperCase() : word[0]).join('')

    resolve(abbr)
    return callback(null, abbr)
  })
}
