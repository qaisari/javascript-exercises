const button = document.querySelector("button")

function greet() {
    const name = prompt("what is your name?")
    const greeting = document.querySelector("#greetings")
    greeting.textContent = `Hello ${name}, nice to see you!`
}
button.addEventListener("click", greet)
const greeting2 = "Hello"
const name2 = "Bob"
console.log(greeting2 + ", " + name2)
const greeting3 = "Howdy"
const name3 = "Ramesh"
console.log(`${greeting3}, ${name3}`)
const song = "Fight the Youth"
const score = 9
const highestScore = 10
const output = `I like the song ${song}. I gave it a score of ${
    (score/highestScore)*100
}%.`
console.log(output)
//lenght
let text = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
let textLength = text.length;
console.log("Lenght: " + textLength)
const lengthDiv = document.createElement("div")
document.body.appendChild(lengthDiv)
lengthDiv.innerHTML = `<p id="length">Length: ${textLength}</p>`
//charAt()
let text2 = "HELLO WORLD"
let char = text.charAt(0)//result: H
//with charAt() if no character was found it returns an empty string
//at() same as charAt but this one can use negative values
let charAt = text.at(0)//result: H
let charAt2 = text.at(-1)//result: D
//charCodeAt() returns the code of the character at specified index
let charCode = text.charCodeAt(0)//result: 72
//toUpperCase()
let tryItButton = document.createElement("button")
tryItButton.textContent = "Try it"
document.body.appendChild(tryItButton)
let text3 = document.createElement("p")
text3.textContent = "Hello World!"
document.body.appendChild(text3)
tryItButton.addEventListener("click", myFunction)
function myFunction() {
    text3.textContent = text3.textContent.toUpperCase();
}
//trim() it helps remove the extra spaces around the word
let trimText = "    Hello World!    "
let resultTrimText = trimText.trim()
console.log("trim: " + resultTrimText)//result: "Hello World!"
//trimStart() this one removes only the first spaces
trimText = "    Hello World!    "
let resultTrimStart = trimText.trimStart()//result: "Hello World!   "
//trimEnd()
trimText =  "    Hello World!    "
let resultTrimEnd = trimText.trimEnd()//result: "   Hello World!"
//padStart()
let padText = "5"
let startPadded = padText.padStart(4,"0")//result: 0005
//padEnd()
padText = "5"
let endPadded = padText.padEnd(4,"0")//result: 5000
//replace()
let replaceText = "Please visit Microsoft!"
let replacedText = replaceText.replace("Microsoft", "W3Schools")
console.log(replacedText)
//replace is case sensitive to make it not care about case add /i 
// "regular expretion"
let replacedCapitalText = replaceText.replace("MICROSOFT", "W3Schools")
console.log(replacedCapitalText)//this will not work
let replacedCaseInsensitiveText = replaceText.replace(/MICROSOFT/i, "W3Schools")
console.log(replacedCaseInsensitiveText)//this would work
let replaceAllMatchText = "Please visit Microsoft and Microsoft!"
let replacedAllMatchText = replaceAllMatchText.replace(/Microsoft/g, "W3Schools")
console.log(replacedAllMatchText)
let regexText = "cats, Cats, cATS, CATS"
// let regexReplaceText = regexText.replaceAll(/cats/i, "Dogs")
// console.log("/i: " + regexReplaceText)
//This would give error cause it has a non-global RegEx
let regexgReplaceText = regexText.replaceAll(/cats/gi, "Dogs")
console.log("/gi: " + regexgReplaceText)
//A string can be converted into an array with split()
let replaceArray = replaceAllMatchText.split(" ")
console.log(replaceArray)
for (x in replaceArray)
    console.log(replaceArray[x])
const select = document.querySelector("select")
const para = document.getElementById("para")

select.addEventListener("change", switchSetWeather)
//If Else statement
function setWeather() {
    const choice = select.value
    if (choice === "sunny") para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream."
    else if (choice === "rainy") para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long."
    else if (choice === "snowing") para.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman."
    else if (choice === "overcast") para.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case."
    else para.textContent = "wabadabadibdib"
}
//Switch statement
function switchSetWeather() {
    const choice = select.value
    switch (choice){
        case "sunny":
            para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream."
            break
        case "rainy":
            para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long."
            break
        case "snowing":
            para.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman."
            break
        case "overcast":
            para.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case."
        default:
            para.textContent = "wabadabadibdib"
    }
}
//Ternary operator
const isBirthday = true
const greeting = isBirthday ? "Happy birthday Mrs. Smith — we hope you have a great day!" : "Good morning Mrs. Smith."
const htmlGreeting = document.createElement("p")
htmlGreeting.textContent = greeting
document.body.appendChild(htmlGreeting)
//Use case of ternary operator
const themeSelect = document.getElementById("theme")
const html = document.querySelector("html")
document.body.style.padding = "10px"

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor
    html.style.color = textColor
}

themeSelect.addEventListener("change", () =>
    themeSelect.value === "dark"
        ? update("black", "white")
        : update("white", "black")
)
//calender
const calender = document.getElementById("calender")
const h1 = document.createElement("h1")

calender.addEventListener("change", () => {
    h1.textContent = calender.value
    document.body.appendChild(h1)
})
//Javascript OR is powerfull
let firstName = ""
let lastName = ""
let nickName = "SuperCoder"

alert( firstName || lastName || nickName || "Anonymous")
//login
//let username = prompt("Enter your username:", "")
// if (username === "Admin") {
//     let password = prompt("Enter password:", "")
//     if (password === "TheMaster") {
//         alert("Welcome!")
//     } else if (password === "" || password === null) {
//         alert("Canceled")
//     } else {
//         alert("Wrong password")
//     }
// } else if (username === "" || username === null) {
//     alert("Canceled")
// } else {
//     alert("I dont know you")
// }
//Event handlers
const textBox = document.getElementById("myText")
textBox.addEventListener("keydown", logKey)

function logKey(event) {
    console.log(`You pressed "${event}".`)
}
//Anonymous function
const textBox2 = document.getElementById("myText2")
textBox2.addEventListener("keydown", (event) => {
    console.log(`You pressed ${event.key}`)
})