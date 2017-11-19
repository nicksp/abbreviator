# Abbreviator

Transform sentences to abbreviations, e.g. (`talk to you later` => `ttyl`).

## Installation

```sh
$ npm install abbreviator
```

## Usage

### Get abbreviation as is

```js
import abbreviator from 'abbreviator'

abbreviator('talk to you later')
  .then(console.log)
  .catch(console.error)
```

### Capitalize abbreviation

```js
import abbreviator from 'abbreviator'

abbreviator('talk to you later', true)
  .then(console.log)
  .catch(console.error)
```

## License

[MIT License](https://nicksp.mit-license.org/) © Nick S. Plekhanov
