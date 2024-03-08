'use strict'
//Level1
//Task1-1
function capitalize(str) {
    let firstLetterInUpperCase = str.slice(0, 1).toUpperCase()
    let stringInLowerCase = str.slice(1).toLowerCase()
    return console.log(firstLetterInUpperCase + stringInLowerCase)
}

//Task1-2
function reverseString(str) {
    let newString = ''

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }

    return console.log(newString)
}

//Task1-3
function convertToBinary(num) {
    return console.log(num.toString(2))
}

//Task1-4
function generateRandomFloat(n) {
    let randomNumber = Math.random() * 100
    let fixedRandomNumber = randomNumber.toFixed(n)
    return console.log(fixedRandomNumber)
}


//Level2
//Task2

function isPalindrom(str) {
    let stringLowerCase = str.toLowerCase()
    let trimString = stringLowerCase.trim()
    return (trimString[0] === trimString[trimString.length - 1])
}


//Task3
function sumOfNumbers(number) {
    let string = number.toString()
    let sum = 0

    for (let i = 0; i < string.length; i++) {
        sum += Number(string[i])
    }
    console.log(sum)
}


//Level3
//Task4
function generateNumberInLimit(start, end) {
    let rangeNumber = Math.floor((Math.random() * (end - start)) + start)
    return console.log(rangeNumber)
}

//Task5
function toCamelCase(str) {
    let splitStr = str.split('_')
    let result = ''
    for (let i = 0; i < splitStr.length; i++) {
        if (i === 0) {
            result += splitStr[i][0].toLowerCase() + splitStr[i].slice(1)
        } else {
            result += splitStr[i][0].toUpperCase() + splitStr[i].slice(1)
        }
    }
    return result
}