'use strict';

let AllProducts = ['Apple', 'Banana', 'Cucumber', 'Watermelon','Ice-cream', 'Orange', 'Eggplant',  'Egg'] ;

// Takes an array as parameter and prints out all products starting with any of these  letters (A,E,I,O,U) 

function ReturnSpecificProduct(array){
  let NewArr = [];
for (let i=0; i<=array.length-1 ; i++){
  if(array[i][0]=='A'|| array[i][0]=='E' || array[i][0]=='I'|| array[i][0]=='O' || array[i][0]=='U'){
    NewArr.push(array[i]);
  }
}
return NewArr;
}
console.log('All products starting with any of these  letters (A,E,I,O,U) are : ',ReturnSpecificProduct(AllProducts));


// second method of the first question but this method need more time complexity 
// O(n^2)
function ReturnSpecificProduct2(array){
let letters = ['A','E','I','O','U'];
let NewArr= [];
for(let i = 0 ; i<=array.length-1; i++){
  for(let j=0; j<= letters.length-1;j++){
    if(array[i][0]==letters[j]){
        NewArr.push(array[i]);
    }
  }
}
return NewArr;
}
console.log('another method for the first question ', ReturnSpecificProduct2(AllProducts));


//  Takes an array as parameter and prints out all products with names longer than 5  characters
function NumberofChar(array){
let arr2 = [];
for (let i=0; i<=array.length-1 ; i++){
  if(array[i].length>5){
 arr2.push(array[i]);
  }
}
return arr2;
}
console.log('All products with names longer than 5  characters',NumberofChar(AllProducts));

