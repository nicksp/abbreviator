const abbreviator = require('./index')

const definitions = [
  'away from keyboard',
  'be right back',
  'by the way',
  '',
  'gave a good night',
  'keep it simple stupid',
  'oh my god',
  function (src) {
    console.log(`callback output: ${src}`)
  },
  'talk to you later',
  'long time no see'
]

const outputAbbreviation = abbr => abbreviator(abbr, true)
  .then(result => console.log(result))
  .catch(err => console.error(err))

abbreviator('talk to you later')
  .then(console.log)
  .catch(console.error)

definitions.forEach(outputAbbreviation)
