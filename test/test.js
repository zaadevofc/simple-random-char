const random = require("simple-random-char");

const log = console.log;
const config = {
    prefix: "aku-", // default : ""
    postfix: "-kamu", // default : ""
    length: 10, // default : 20
    count: 1 // default : 1
}

log(random.alphanum(config)) // result : aku-qgx2vNjzpu-kamu
log(random.alphabet(config)) // result : aku-DIlzxHVBlx-kamu
log(random.numbers(config)) // result : aku-2615231700-kamu