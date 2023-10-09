let kilometers = parseInt(prompt('Quanti kilometri vuoi percorrere oggi?'));
let age = parseInt(prompt('Quanti anni hai?'));
const price = 0.21;
let totalPrice = (price * kilometers);
let finalPrice = document.getElementById('prezzo');

if(age > 65){
    totalPrice = (totalPrice - (totalPrice * 40 / 100)).toFixed(2);
    finalPrice.innerHTML = totalPrice;
} else if(age < 18){
    totalPrice = (totalPrice - (totalPrice * 20 / 100)).toFixed(2);
    finalPrice.innerHTML = totalPrice;
} else{
    finalPrice.innerHTML = totalPrice;
}
