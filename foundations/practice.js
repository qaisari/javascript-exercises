//Default parameters
function showMessage(from, text = "no text given") {
    console.log(from + ": " + text)
}
showMessage("Ann") //Ann: no text given
showMessage("Ann", undefined) //Ann: no text given
//It can take another function too
function showMessage2(from, text = noText()) {
    console.log(from + ": " + text)
}
function noText() {
    return "no text was given"
}
showMessage2("Alfred")//Alfred: no text was given
//Old way of doing it
function showMessageOld(from, text) {
    if (text === undefined) {
        text = "no text given"
    }
    console.log(from + ": " + text)
}
showMessageOld("Ayman")//Ayman: no text given
//OR
function showMessageOR(from, text) {
    text = text || "no text given"
    console.log(`${from}: ${text}`)
}
showMessageOR("OR")//OR: no text given
//Bad function it does more then it should
function showPrime(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime
        }
        console.log(i)
    }
}
//showPrime(10)
//Good function
function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue
        console.log(i)
    }
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false
    }
    return true
}
//showPrimes(10)
//task
function checkAge(age) {
    return (age > 18) ? true : confirm("Did parents allow you?")
}
function checkAgeOR(age) {
    return (age > 18) || confirm("Did parents allow you?")
}
function min(a, b) {
    if (a < b) return a
    return b
}
function min2(a, b) {
    return (a < b) ? a : b
}
function pow(a, b) {
    let result = 1
    for (let i = 0; i < b; i++) result = result * a
    return result
}
console. log(pow(2, 3))
//browser functions
const myText = "I am a string"
const newString = myText.replace("string", "sausage")
console.log(newString)

const myArray = ["I", "love", "chocolate", "frogs"]
const madeAString = myArray.join(" ")
console.log(madeAString)

const myNumber = Math.random()
console.log(myNumber)

function random(number) {
    return Math.floor(Math.random() * number)
}
console.log(random(50))