// ********** prompt ile Kullanicidan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let fullName = prompt("Lutfen Adinizi Giriniz: ")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`

//Promt dedigimiz olay yukarıda acilan bri pop up uzerinden kullanıcıdan
//Input almaya yarıyor. Bunu, HTML yapısına ulasıp degistiem imkanımız var.