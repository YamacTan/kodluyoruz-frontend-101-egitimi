// ********** liste icerisindeki son elemana ulasmak veya eleman eklemek **********

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degisti..."

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge degisti..."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi Olusturdugumuz Oge"

ulDOM.append(liDOM) // en sona ekler
ulDOM.prepend(liDOM) //en basa ekler


//Asagıdaki kullanım, id ile cagırmak icindir. 
let test = document.querySelector("#list")

//Bu kullanım idsi list olan ul'yi cagırmak icin kullanilir. 
let ulTest = document.querySelector("ul#list") 

//Bu kullanım: idsi list olan ul icindeki li'ler uzerinde islem yapar.
let explain = document.querySelector("ul#list>li:last-child")


//!! TODO LIST ODEVINDE APPEND VE PREPEND LAZIM OLACAK.