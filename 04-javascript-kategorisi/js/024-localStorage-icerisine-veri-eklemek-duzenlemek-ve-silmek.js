// Local Storage:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


// localStorage icerisine bilgi kaydetmek:
let email = "hakanyalcinkaya@gmail.com"
localStorage.setItem('userEmail', email) // -> anahtar, deger yapisi kullanilir(key, value)

// localStorage icerisindeki bilgiyi bir degiskene atamak ve cagirmak:
let localStorageEMailInfo = localStorage.getItem('userEmail') // daha once atadigimiz anahtar bilgisi

console.log(localStorageEMailInfo)

// localStorage icerisinden istenilen Key bilgisinin silinmesi:
localStorage.removeItem('userEmail') // key bilgisini yazarak silebiliriz..

//Genel hatlariyla setItem, getItem ve removeItem yöntemlerini kullanıyoruz. 
//setItem kullanırken ilk parametremiz bir key, ve ikinci parametremiz bir value.
//Sonrasinda getItem kullnaımında key girerek atanmış olan valueyu cagırabilir ve degiskene atama yapabiliriz. 
//localStorage mantıgı, hangi websitesine girdiysek onun icinde veriyi tutar.
//Bu iki kayıt türü arasındaki en temel fark 
//localStorage kayıtları zaman aşımı olmaksızın tutarken sessionStorage kayıtları oturum sonlanana kadar ya da veri kaybolana kadar tutmaktadır. 