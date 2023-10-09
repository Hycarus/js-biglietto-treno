let kilometers = parseInt(prompt('Quanti kilometri vuoi percorrere oggi?'));
console.log(kilometers);
let age = parseInt(prompt('Quanti anni hai?'));
const price = 0.21;
let finalPrice = document.getElementById('prezzo');

if(isNaN(age) || isNaN(kilometers)){
    alert('Inserisci valori validi');
    window.location.reload();
}
let totalPrice = (price * kilometers);
totalPrice = totalPrice.toFixed(2);
if(age > 65){
    totalPrice = (totalPrice - (totalPrice * 40 / 100)).toFixed(2);
    finalPrice.innerHTML = totalPrice + '\u20AC';
} else if(age < 18){
    totalPrice = (totalPrice - (totalPrice * 20 / 100)).toFixed(2);
    finalPrice.innerHTML = totalPrice + '\u20AC';
}
finalPrice.innerHTML = totalPrice + '\u20AC';

