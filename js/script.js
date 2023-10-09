let kilometers = parseInt(prompt('Quanti kilometri vuoi percorrere oggi?'));
let age = parseInt(prompt('Quanti anni hai?'));
const price = 0.21;
let finalPrice = document.getElementById('prezzo');

if(isNaN(age) || isNaN(kilometers)){
    alert('Inserisci valori validi');
    window.location.reload();
}
let totalPrice = (price * kilometers);
if(age > 65){
    totalPrice = (totalPrice - (totalPrice * 40 / 100)).toFixed(2);
    
} else if(age < 18){
    totalPrice = (totalPrice - (totalPrice * 20 / 100)).toFixed(2);
}
finalPrice.innerHTML = totalPrice + '\u20AC';