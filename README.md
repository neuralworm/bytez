# byteme
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.4.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A module to take a number or string value representing byte-size, and outputting a human-readable string.

### This module can convert bytes into either Bytes(8 bits) or Bits, as well as Kibi(base 2 - 1024) or Kilo(base 10 - 1000) values, or any combination of either.

| Options   | Appendation | Example   |
| --------- | ----------- | --------- |
| Bytes     | "B"         | "420MB"   |
| Bits      | "bits"      | "420Mbit" |
| (Base 10) | k, M, G     | "420MB"   |
| (Base 2)  | ki, Mi, Gi  | "420MiB"  |

## Install

```sh
yarn install byteme
```

## Usage

```js
// use Numbers or Strings
console.log(byteme(4200)) // "4.2KB" (4.2 kilobytes)
console.log(byteme("42000")) // "42KB" (42 kiloBytes)

// all using the same 500GB input

console.log(byteme(500000000000),{
  kibibytes: false
}) // "500GB" **(500 GigaBytes)**

console.log(byteme(500000000000),{
  kibibytes: true
}) // "465.7GiB" **(465.7 GibiBytes)**

console.log(byteme(500000000000),{
  kibibytes: true,
  bits: true
}) // "3.6Tibit" **(3.6 Tebibits)**

```

## Author

👤 **Jake Miller**

* Website: jakermate.github.io
* Github: [@jakermate](https://github.com/jakermate)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_