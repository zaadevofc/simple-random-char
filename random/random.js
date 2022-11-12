var vcodes = require('voucher-code-generator');
const fs = require('fs')
const packJson = JSON.parse(fs.readFileSync('./package.json'))

let errori = `> Sistem sedang error!\n> see the issues for details : ${packJson.bugs.url}\n`
let costumRequired = `> Custom charset harus di isi"!\n> see the readme for details : ${packJson.homepage}\n`
let lengthNotValid = `> Minimal lebih dari satu karakter!\n> Contoh benar : {custom: "abcdefgh"}\n> Contoh salah : {custom: "a"}\n> Contoh salah : {custom: "aaaaa"}\n> see the readme for details : ${packJson.homepage}\n`

exports.alphanum = (options = {}) => {
    try {
        let result;
        const getRandom = vcodes.generate({
            prefix: options?.prefix,
            postfix: options?.postfix,
            length: options?.length || 20,
            count: options?.count || 1,
            charset: vcodes.charset("alphanumeric"),
        });
        if (!options?.count || options?.count === 1) {
            result = getRandom[0]
        } else {
            result = getRandom
        }
        return result
    } catch {
        throw errori
    }
}

exports.alphabet = (options = {}) => {
    try {
        let result;
        const getRandom = vcodes.generate({
            prefix: options?.prefix,
            postfix: options?.postfix,
            length: options?.length || 20,
            count: options?.count || 1,
            charset: vcodes.charset("alphabetic")
        });
        if (!options?.count || options?.count === 1) {
            result = getRandom[0]
        } else {
            result = getRandom
        }
        return result
    } catch {
        throw errori
    }
}

exports.numbers = (options = {}) => {
    try {
        let result;
        const getRandom = vcodes.generate({
            prefix: options?.prefix,
            postfix: options?.postfix,
            length: options?.length || 20,
            count: options?.count || 1,
            charset: vcodes.charset("numbers")
        }); // if (options?.count.length === 1 ||!options?.count) {
        if (!options?.count || options?.count === 1) {
            result = getRandom[0]
        } else {
            result = getRandom
        }
        return result
    } catch {
        throw errori
    }
}

exports.custom = (options = {}) => {
    try {
        let result;
        if (!options?.custom) throw (costumRequired)
        if (options?.custom.length === 1) throw (lengthNotValid)
        const getRandom = vcodes.generate({
            prefix: options?.prefix,
            postfix: options?.postfix,
            length: options?.length || 20,
            count: options?.count || 1,
            charset: `${options.custom}`
        });
        if (!options?.count || options?.count === 1) {
            result = getRandom[0]
        } else {
            result = getRandom
        }
        return result
    } catch {
        throw (lengthNotValid)
    }
}