const random = require('../random/random')
const log = console.log;

/*
#> count == 1 => result = String
#> count > 1 => result = Array

#> alphanum = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
#> alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
#> numbers = "0123456789"
#> custom = "YOUR_CUSTOM_CHAR"
*/

// Simple
const alphanum = random.alphanum() // result : MGD9ypmFoXwhw7tws50n
const alphabet = random.alphabet() // result : thYSTuTTScEKQYfiwfpN
const numbers = random.numbers() // result : 26847188549482119024

// Advance
const config = {
    prefix: 'awalan-', // default : ''
    postfix: '-akhiran', // default : ''
    length: 10, // default : 20
    count: 3 // default : 1
}

log(random.alphanum(config)) // result : awalan-qgx2vNjzpu-akhiran
log(random.alphabet(config)) // result : awalan-DIlzxHVBlx-akhiran
log(random.numbers(config)) // result : awalan-2615231700-akhiran

// Custom
const custom = {
    prefix: 'awalan-', // default : ''
    postfix: '-akhiran', // default : ''
    length: 10, // default : 20
    count: 3, // default : 1,
    custom: 'YOUR_CUSTOM_CHAR' // required! (bisa di isi apa aja)
}

log(random.custom(custom)) // result : awalan-CR_AYRHUUS-akhiran