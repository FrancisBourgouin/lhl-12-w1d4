// Functions recap

//They do stuff
//They are object ?? (are stuff)
//

function add(a, b) {
    // console.log(a + b)
    return a + b;
}

console.log(add(5, 6))
console.log(add(4, 5) + add(4, 7))



// Functions as a value

const add2 = function (a, b, c) {
    return a + b + c;
}

const add3 = (a, b, c, d) => {
    return a + b + c + d
}

console.log(add2())

const isItFalsy = valueToTest => {
    if (!valueToTest) {
        return "Yes it is falsy";
    } else {
        return "No it is not falsy";
    }

    // if (valueToTest) {
    //     return "No it is not falsy";
    // } else {
    //     return "Yes it is falsy";
    // }
}

console.log(isItFalsy(NaN))
console.log(isItFalsy(0))
console.log(isItFalsy(false))
console.log(isItFalsy(undefined))
console.log(isItFalsy(null))
console.log(isItFalsy(""))
// Anonymous functions

const myFunction = function () {
    // stuff here
}

// function() {
//     // stuff here
// }

// const names = ["Petit Poulet", "Little Chicken", "Pequeño Pollo"]

// for (const name of names) {
//     console.log("Hi " + name);
//     console.log(`Hey ${name}`);
// }

// const listNamesAndSayHiBad = () => {
//     const names = ["Petit Poulet", "Little Chicken", "Pequeño Pollo"]

//     for (const name of names) {
//         console.log("Hi " + name);
//         console.log(`Hey ${name}`);
//     }
// }


console.log(function () {
    return "I AM ANONYMOUS"
})

console.log(add)
// const randomObject = {}
// randomObject.randomProperty = 5

// randomObject = []

// Function calling vs referencing

// Callback intro

const names = ["Petit Poulet", "Little Chicken", "Pequeño Pollo"]

const listNamesAndSayHiGood = (names) => {

    for (const name of names) {
        console.log("Hi " + name);
        console.log(`Hey ${name}`);
    }
}

const listNames = (names, action) => {
    for (const name of names) {
        action(name)
    }
}
const sayHi = (name) => {
    console.log(`Hi ${name}`)
}
const singName = name => {
    console.log(`🎵 ${name} 🎵`)
}

listNames(names, sayHi)
listNames(names, singName)

listNames(names, function (name) {
    console.log(name.toLowerCase())
})

listNames(names, name => console.log(name.length))


const someArrowFunction = () => {
    // Stuff goes here.
}

const someOtherArrwFct = a => {
    // 
}
const someOtherOtherArr = (a, b) => {
    a + b
}
console.log(someOtherOtherArr(5, 5))

const someOtherOtherOtherArrow = (a, b) => a + b
console.log(someOtherOtherOtherArrow(5, 5))
// Callback usage

const someArray = ['Hello', 'Bonjour', 'Hola', 'Privet']

someArray.forEach(singName)
someArray.forEach(element => singName(element))
someArray.forEach(word => console.log(word.toUpperCase))


// What does a forEach do ?
// Executes a function on each element of an array
// Gives the value of each element

const forEachElementOf = (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        callback(array[index], index)
    }
}

const listNames = (names, action) => {
    for (const name of names) {
        action(name)
    }
}
