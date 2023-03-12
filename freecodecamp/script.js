//1

let quoteSample = 'The five boxing wizards jump quickly.';
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

//2

let movieName = '2001: A Space Odyssey';
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

//3

let movieName = '2001: A Space Odyssey';
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

//4

let username = 'JackOfAllTrades';
let userCheck = /^[a-zA-Z](?:[a-zA-Z]+\d*|\d{2,})$/; // Change this line
let result = userCheck.test(username);

//5

let sample = 'Whitespace is important in separating words';
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

//6

let sample = 'Whitespace is important in separating words';
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

//7

let haStr = 'Hazzzzah';
let haRegex = /Haz{3,}zah/; // Change this line
let result = haRegex.test(haStr);

//8

let timStr = 'Timmmmber';
let timRegex = /Tim{4}ber/g; // Change this line
let result = timRegex.test(timStr);

//9

let favWord = 'favorite';
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

//10

let sampleWord = 'astronaut';
let pwRegex = /(?=\w{5,})(?=\D\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

//11

let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a);

let sumAB = a + b;
console.log(sumAB);

//12

let output =
  'Get this to show once in the freeCodeCamp console and not at all in the browser console';
console.log(output);
console.clear();

//13

let seven = 7;
let three = '3';
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);

//14

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//15

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//16

let x = 7;
let y = 9;
let result = 'to come';

if (x == y) {
  result = 'Equal!';
} else {
  result = 'Not equal!';
}

console.log(result);

//17

function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(getNine);

//18

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

//19

function countToFive() {
  let firstFive = '12345';
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
    // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();

//20

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    row = [];
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

//21

function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log('Still going!');
  }
}
