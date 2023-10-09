let kilometers;
let age;
const price = 0.21;
let finalPrice = document.getElementById('prezzo');

if(isNaN(age) || isNaN(kilometers)){
    kilometers = parseInt(prompt('Quanti kilometri vuoi percorrere oggi?'));
    age = parseInt(prompt('Quanti anni hai?'));
    window.location.reload();
}
let totalPrice = (price * kilometers);
if(age > 65){
    totalPrice = (totalPrice - (totalPrice * 40 / 100)).toFixed(2);
    finalPrice.innerHTML = totalPrice;
} else if(age < 18){
    totalPrice = (totalPrice - (totalPrice * 20 / 100)).toFixed(2);
    finalPrice.innerHTML = totalPrice;
} else{
    finalPrice.innerHTML = totalPrice;
}
