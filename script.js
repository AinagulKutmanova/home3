const products = [
{ name: "Ноутбук", price: 50000 },
{ name: "Мышка", price: 3000 },
{ name: "Наушник", price: 7000 },
];


const tandalganTovar = [products[1], products[2]]; 

let total= tandalganTovar.reduce((sum, product) => sum + product.price, 0);

tandalganTovar.forEach(product => console.log(`${product.name}: ${product.price} сом`));
console.log(`Жалпы сумма: ${total} сом`);


const paymentMethod = prompt('Накталай толойсузбу же карточка мененби?')
const paidAmount = +prompt("Толонгон сумма:");

if (paidAmount < total) {
  console.log("Толонгон сумма жетишсиз! ");
} else {
  let change = paidAmount - total;
  console.log(` ${paymentMethod}`);
  console.log(` ${change}`);
}

// 2-тапшырма

function isPalindrome(str) {
    
 return str === str.split('').reverse().join('');
}

console.log(isPalindrome("заказ")); 
console.log(isPalindrome("салам"));
console.log(isPalindrome("жаз келди"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("шалаш"));

