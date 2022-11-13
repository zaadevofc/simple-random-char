## Simple Random Char

Membuat karakter acak dengan dengan mudah dan simple. Dilengkapi dengan "Alphanumeric" && "Alphabet" && "Numbers" && "Costum"

Package ini menggunakan library [Voucherify](https://github.com/voucherifyio/voucher-code-generator-js).

Apa saja fiturnya?
* Get random karakter (Alphanumeric)
* Get random karakter (Alphabet)
* Get random karakter (Numbers)
* Get random karakter (Costum)

## Installation

Install with npm:

```js
$ npm install simple-random-char
```

With require:

```js
const random = require("simple-random-char");
```

### Usage

### Note :
```js
/*
#> count == 1 => result = String
#> count > 1 => result = Array

#> alphanum = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
#> alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
#> numbers = "0123456789"
#> custom = "YOUR_CUSTOM_CHAR"
*/
```

#### Example :
```js
const alphanum = random.alphanum() // result : MGD9ypmFoXwhw7tws50n
const alphabet = random.alphabet() // result : thYSTuTTScEKQYfiwfpN
const numbers = random.numbers() // result : 26847188549482119024
```

#### Advance
```js
const log = console.log;
const config = {
    prefix: "awalan-", // default : ""
    postfix: "-akhiran", // default : ""
    length: 10, // default : 20
    count: 1 // default : 1
}

log(random.alphanum(config)) // result : awalan-qgx2vNjzpu-akhiran
log(random.alphabet(config)) // result : awalan-DIlzxHVBlx-akhiran
log(random.numbers(config)) // result : awalan-2615231700-akhiran
```

#### Costum

```js
const log = console.log;
const custom = {
    prefix: "awalan-", // default : ""
    postfix: "-akhiran", // default : ""
    length: 10, // default : 20
    count: 1, // default : 1,
    custom: "YOUR_CUSTOM_CHAR" // required! (bisa di isi apa aja)
}

log(random.custom(custom)) // result : awalan-CR_AYRHUUS-akhiran
```

### Sample

result for `count > 1` (lebih dari satu)

```json
[
  "awalan-fbT82pSXJt-akhiran",
  "awalan-YoR33rMTWb-akhiran",
  "awalan-99iW2fGrWV-akhiran"
] // alphanum

[
  "awalan-EwwIRhgMJa-akhiran",
  "awalan-gyHaYdMXmg-akhiran",
  "awalan-chFbICCvaf-akhiran"
] // alphabet

[
  "awalan-3781640300-akhiran",
  "awalan-3730818925-akhiran",
  "awalan-0984199624-akhiran"
] // numbers

[
  "awalan-SCUTSRHTSO-akhiran",
  "awalan-OTSCSOCOAH-akhiran",
  "awalan-RRRRUMSOOA-akhiran"
] // custom
```

## Testing

Install dependencies:

```
npm install
```

Run tests:

```
npm run test
```

## License

Code released under the [Apache](LICENSE.txt).