
//Problem:1  radianToDegree

function radianToDegree(radian) {
   const pi = Math.PI;
   return radian * (180 / pi);
}
const result = radianToDegree(15).toFixed(2);

// console.log(result);

// Problem: 2  isJavaScriptFile

function isJavaScriptFile(filename) {
   const file = 'app.js';

   if (filename == file) {
      return true;
   }
   else {
      return false;
   }
}
// console.log(isJavaScriptFile('app.js'))

// Problem 3: oilPrice

function oilPrice(diesel, petrol, octane) {
   const dieselPrice = 114 * diesel;
   const petrolPrice = 130 * petrol;
   const octanePrice = 135 * octane;
   const total = dieselPrice + petrolPrice + octanePrice;
   console.log(total);
}
oilPrice(2, 3, 4);
