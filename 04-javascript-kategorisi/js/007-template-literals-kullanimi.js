// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

// console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

//Template literals dedigimiz olay klavyedeki backtick ile yapiliyor.
//Basmak istedigin bilgiyi istedigin kadar satirda bölmeden basabilirsin. 
// ${} kullanarak satirlarin icinde istedigin variable bilgisini basabilirsin. 

let info = `
Merhaba ${username} sitemize hosgeldin.. 
mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${username[0]}.
`

console.log(info)