// Local Storage Islemleri:
// Eger tutacagimiz bilgi object ise JSON.stringify ile objeyi string yapiya cevirebiliriz.
//Objeyi string yapıya cevirmedigimiz surece getItem kullanırken sıkıntı cikacaktir.

let user = {userName: "hakanyalcinkaya", isActive: true}
console.log(user)
localStorage.setItem('userInfo', JSON.stringify(user) )


let userInfo = localStorage.getItem('userInfo') // bilgiyi al
//Alinan bilgi string olara bize döndü. Bundan kaynaklı obje elemanlarına erisemiyoruz.
//Stringi parse ederek bu durumu cozebiliriz. 
userInfo = JSON.parse(userInfo)
console.log(userInfo)


// 2. egzersiz:
let items = [1,2,3, user] //Yine bir obje atmaya calısıyoruz.
// localStorage.setItem('newItems', items) // hatali :(
localStorage.setItem('newItems', JSON.stringify(items)) //Stringify atmamız gerekiyor

let newItems = JSON.parse( localStorage.getItem('newItem') ) //JSON Parse ile localStorage icindeki bilginin cekilip kullanilmasi..
