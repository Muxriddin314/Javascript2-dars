let budget = Number(prompt("Sizda necha so'm pul bor:"));
let ticket = 500;
let hotel = 250;
let expenses = 120;
let dollar = 10650.34;
let euro =  10650.03;
let total = (ticket + hotel) * dollar + (expenses * euro); 
let sum = budget - total;
console.log(`%cSizning budjetingiz: ${budget} so'm` ,"font-size: 22px; color:red");
console.log(`%cSizning xarajatlaringiz ${total} so'm ` ,"font-size: 22px");
console.log(`%cSizda qolgan pul ${sum} so'm` ,"font-size: 32px; color:green");

