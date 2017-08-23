# hash-to-collection

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/hash-to-collection.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/hash-to-collection
[travis-image]: https://img.shields.io/travis/bentatum/hash-to-collection.svg?style=flat-square
[travis-url]: https://travis-ci.org/bentatum/hash-to-collection
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

convert a hash to a collection

## Install

```
yarn add hash-to-collection
```

## API
```js
hashToCollection(hash, [keyName])
```

### Arguments
collection (Array): the collection to convert
keyName (string): the key name your hash keys will be stored as (default: 'key')

## Usage

```js
import hashToCollection from 'hash-to-collection'

const hash = {
  123: { ... },
  abc: { ... }
}
const collection = hashToCollection(collection, 'uid')

/*
  [{ uid: 123, ... }, { uid: 'abc', ... }]
*/
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
