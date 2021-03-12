# bytez
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.5.3-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A module to take a number or string value representing byte-size, and outputting a human-readable string.

<hr>


This module can output as either Bytes(8 bits) or Bits, as well as kibibytes(base 2 - 1024) or normal(base 10 - 1000) values, or any combination of either.


By default, the converter will output normal Bytes as most people are used to (hard drive manufacturers advertsie their storage amounts in this manner.)

<hr>

## Install

```sh
yarn install bytez
```

## Usage

```js
const bytez = require('bytez')

// use Numbers or Strings
console.log(bytez(4200)) // "4.2KB" (4.2 kilobytes)
console.log(bytez("42000")) // "42KB" (42 kiloBytes)

// all using the same 500GB input

console.log(bytez(500000000000,{
  base2: false
})) // "500GB" **(500 GigaBytes)**

console.log(bytez(500000000000,{
  base2: true
})) // "465.7GiB" **(465.7 GibiBytes)**

console.log(bytez(500000000000,{
  base2: true,
  bits: true
})) // "3.6Tibit" **(3.6 Tebibits)**

```

## Output Formats
| Options   | Appendation | Example   |
| --------- | ----------- | --------- |
| Bytes     | "B"         | "420MB"   |
| Bits      | "bits"      | "420Mbit" |
| (Base 10) | k, M, G     | "420MB"   |
| (Base 2)  | ki, Mi, Gi  | "420MiB"  |


## Author

👤 **Jake Miller**

* Website: [jakemiller.io](https://jakemiller.io)
* Github: [@jakermate](https://github.com/jakermate)

