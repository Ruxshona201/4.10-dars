// 80
// function ahvol(word) {
//  if (word == "happy") {
//     return "Today, I am feeling happy";
//  } else if(word == "sad") {
//     return "Today, I am feeling sad";
//  } else if(word == ""){
//     return "Today, I am feeling neutral";
//  }
// }
// console.log(ahvol("happy"));
// console.log(ahvol("sad"));
// console.log(ahvol(""));

// 81.
function bogin(word) {
    return (word.index + 1) / 2
    }
    console.log("Hehehehehehe");
// 82.
// let belgi = "A"
// console.log(belgi.charCodeAt(0));

// 83.
// function tengmi(soz1, soz2) {
//     if(soz1 == soz2) {
//         console.log("true")
//     }else {
//         console.log("false")
//     }
//     }
//     tengmi("hello", "hELLo");
//     tengmi("emotive", "emotive");

// 84.
// function belgiSoni(word) {
//     console.log(word.length);
//     }
//     belgiSoni("Hello World");
//     belgiSoni("Edabit");
//     belgiSoni("wash your hands!");

// 85.


// 86.
// let arr = [2,3,4]
// let newArr = arr.map((el)=>{
// return el * 2
// })
// console.log(newArr)

// 87.

// 88.

// 90.

// 95.
function yigindi(a, b, d) {
    return a + b + d
}
yigindi(2, 7, 4);
yigindi(2, 7, 4);
yigindi(2, 7, 4);

// 97.
function uyigaQaytish(son1, son2, son3, son4) {
  return son1 + son2 + son3 + son4
}
console.log(uyigaQaytish(2, 4, 2, 5))
console.log(uyigaQaytish(-1, -4, -3, -2))
console.log(uyigaQaytish(3, 4, -5, -2))

// 103.
// let arr = [ 1, 2, 3, 4, 5]
// for(let i = 0; i < arr.length; i++) {
// arr[i] = arr[i] * i;
// }
//  console.log(arr);

// 104.
let arr = [0, 0, 0, 0, 0]
for(let i = 0; i < arr.length; i++) {
arr[i] = arr[i] + i;
}
 console.log(arr);

//  107.
const array1 = [1, 2, 3];
console.log('array1:', array1);

const reversed = array1.reverse();
console.log('reversed:', reversed);
console.log('array1:', array1);



// 1.
// printNumber = function(a) {
//     console.log(a);
//     if(a == 10) {
//         return;
//     }
//     printNumber(a + 1);
// }

// printNumber(1);

// 2.
// printNumber = function(b) {
//     console.log(b);
// for(let b = 1; b <= 100; b++) {
//  if(b % 2 != 1) {
//     console.log(b + "");
//  }
// }
// }

// 3.
// const number = parseInt(prompt('Enter an integer: '));
// const range = parseInt(prompt('Enter a range: '));
// for(let i = 1; i <= range; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }

// 4.
// function calculateSum() {
//     let sum = 0;
  
//     for (let i = 1; i <= 10; i++) {
//       sum += i;
//     }
  
//     return sum;
//   }
  
//   console.log(calculateSum())

//   // 5.
// function calculateProduct() {
//     let product = 1;
  
//     for (let i = 1; i <= 10; i++) {
//       product *= i;
//     }
  
//     return product;
//   }
  
  
//   console.log(calculateProduct());

//   // 6.
// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let i = 0; i < arr.length; i++) {
// arr[i] = arr[i] * i;
// }
//  console.log(arr);

// // 7.
// function cToF(celsius) 
// {
//   let  cTemp = celsius;
//   let cToFahr = cTemp * 9 / 5 + 32;
//   let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   let fTemp = fahrenheit;
//   let fToCel = (fTemp - 32) * 5 / 9;
//   let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// } 
// cToF(60);
// fToC(45);

// function celcToFahr( n ) { 
// 	return ((n * 9.0 / 5.0) + 32.0); 
// } 

// const n = 20; 

// console.log(celcToFahr( n ));

// // 8.
// function convertFahrenheitToCelsius(temperature) {
// 	return (temperature - 32) * (5/9)
// }
// var theirInput = prompt("Enter in a Fahrenheit temperature & I'll convert it to Celsius");
// var result = convertFahrenheitToCelsius(theirInput);
// console.log(result);

// // 9.
// // Function to extract odd numbers from 1 to 100
// function extractOddNumbers() {
// 	const oddNumbers = [];
  
// 	for (let i = 1; i <= 100; i++) {
// 	  if (i % 2 !== 0) {
// 		oddNumbers.push(i);
// 	  }
// 	}
  
// 	return oddNumbers;
//   }
//   const result = extractOddNumbers();
//   console.log(result);

// // 10.

// function sumEvenNumbers() {
// 	let sum = 0;
  
// 	for (let i = 12; i < 30; i += 2) {
// 	  sum += i;
// 	}
  
// 	return sum;
//   }
  
//   const result = sumEvenNumbers();
//   console.log(result);