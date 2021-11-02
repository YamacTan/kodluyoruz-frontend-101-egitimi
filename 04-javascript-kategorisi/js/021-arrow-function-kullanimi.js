// Arrow function Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function hello(firstName) {  //Classic function definition.
    console.log(`Merhaba ${firstName}`)
}

hello("JavaScript")

const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) } //Arrow function rules. 
helloFuncV1("helloFuncV1")


const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`) // bir parametre, bir donus islemi
helloFuncV2("helloFuncV2")


const helloFuncV3 = (firstName, lastName) => console.log( //İki parametre, bir donus islemi
    `Merhaba ${firstName} ${lastName}`
) // console.log parantezi

helloFuncV3("helloFuncV3", "Last Name info")

const helloFuncV4 = (firstName, lastName) => { //Birden fazla parametre ve birden fazla donus islemi.
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info) 
    return info
}

helloFuncV4("helloFuncV4", "Other Info")

