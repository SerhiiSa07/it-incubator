//1

function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) counter += 1;
  }
  return counter;
}

//2

function barTriang(p1, p2, p3) {
  return [
    +((p1[0] + p2[0] + p3[0]) / 3).toFixed(4),
    +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4),
  ];
  //your code here
}

//3

var cubeChecker = function (volume, side) {
  if (side <= 0 || volume <= 0) return false;
  console.log(volume ** (1 / 3));
  return Math.cbrt(volume) === side;
};

//4

function chromosomeCheck(sperm) {
  return sperm === 'XY'
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}

//5

function numberToPower(number, power) {
  console.info(Math.log2(1024));
  let total = 1;
  for (let i = 1; i <= power; i++) {
    total = total * number;
  }
  return total; // Code here
}

//6

function strCount(str, letter) {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

//7

function nearestSq(n) {
  let sqrtOfN = Math.trunc(Math.sqrt(n));
  let result =
    Math.abs(sqrtOfN * sqrtOfN - n) >
    Math.abs((sqrtOfN + 1) * (sqrtOfN + 1) - n)
      ? sqrtOfN + 1
      : sqrtOfN;

  if (sqrtOfN * sqrtOfN === n) {
    result = n;
  } else {
    result = result * result;
  }
  return result; // your code
}

//8

function mystery() {
  var results = { sanity: 'Hello' };
  return results;
}

//9

function isDivisible(n, x, y) {
  return n % x == 0 && n % y == 0 ? true : false;
}

//10

function century(year) {
  let centuryCount = 0;
  while (year > 0) {
    year = year - 100;
    centuryCount = centuryCount + 1;
  }
  return centuryCount; // Finish this :)
}

//11

function getStatus(isBusy) {
  var msg = isBusy ? 'busy' : 'available';
  return {
    status: msg,
  };
}

//12

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

//13

function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
  }
  return sum;
}

//14

function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
  }
  return sum;
}

//15

function mango(quantity, price) {
  let totalCost = 0;
  while (quantity > 0) {
    if (quantity > 2) {
      quantity -= 3;
      totalCost += 2 * price;
    } else {
      totalCost += price;
      quantity -= 1;
    }
  }
  return totalCost;
}

//16

function solution(str) {
  return str.split('').reverse().join('');
}

//17

function simpleMultiplication(number) {
  {
    return number * (number % 2 > 0 ? 9 : 8);
  } // your code........
}

//18

function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

//19

const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
  // Your code here
};

//20

function litres(time) {
  return Math.floor(time / 2);
}

//21

let firstFakeName = {
  A: 'Alpha',
  B: 'Beta',
  C: 'Cache',
  D: 'Data',
  E: 'Energy',
  F: 'Function',
  G: 'Glitch',
  H: 'Half-life',
  I: 'Ice',
  J: 'Java',
  K: 'Keystroke',
  L: 'Logic',
  M: 'Malware',
  N: 'Nagware',
  O: 'OS',
  P: 'Phishing',
  Q: 'Quantum',
  R: 'RAD',
  S: 'Strike',
  T: 'Trojan',
  U: 'Ultraviolet',
  V: 'Vanilla',
  W: 'WiFi',
  X: 'Xerox',
  Y: 'Y',
  Z: 'Zero',
};
let surFakeName = {
  A: 'Analogue',
  B: 'Bomb',
  C: 'Catalyst',
  D: 'Discharge',
  E: 'Electron',
  F: 'Faraday',
  G: 'Gig',
  H: 'Hacker',
  I: 'IP',
  J: 'Jabber',
  K: 'Killer',
  L: 'Lazer',
  M: 'Mike',
  N: 'n00b',
  O: 'Overclock',
  P: 'Payload',
  Q: 'Quark',
  R: 'Roy',
  S: 'Spy',
  T: 'T-Rex',
  U: 'Unit',
  V: 'Virus',
  W: 'Worm',
  X: 'X',
  Y: 'Yob',
  Z: 'Zombie',
};

function aliasGen(firstname, surname) {
  // Get first char of each string and convert it to Upper case in case its lower case
  let firstLetterOfFirstName = firstname.charAt(0).toUpperCase();
  let firstLetterOfSurName = surname.charAt(0).toUpperCase();
  // initialize name and sur variables to return them later
  let name, sur;
  // get values of  both our fake name and sur fake name obj
  let firstValues = Object.values(firstFakeName);
  let surValues = Object.values(surFakeName);

  if (
    // check if the first char is not a number
    isNaN(Number(firstLetterOfFirstName)) &&
    isNaN(Number(firstLetterOfSurName))
  ) {
    // loop through firstValues array
    for (let i = 0; i < firstValues.length; i++) {
      // check if the first letter of the current value is equal to the first letter
      // of the name received as an argument
      if (firstValues[i].charAt(0).toUpperCase() === firstLetterOfFirstName)
        // if the letters are equal assign the fake name to the name variable we want to return
        name = firstValues[i];
    }
    // check if the first letter of the current value is equal to the first letter
    // of the surname received as an argument
    for (let i = 0; i < surValues.length; i++) {
      // if the letters are equal assign the fake surname to the sur variable we want to return
      if (surValues[i].charAt(0).toUpperCase() === firstLetterOfSurName)
        sur = surValues[i];
    }
    // return the alias
    return `${name} ${sur}`;
    // in case one of the first chars of the argument strings is a number return this:
  } else return 'Your name must start with a letter from A - Z.';
}

//22

function reverseWords(str) {
  return str.split(' ').reverse().join(' '); // reverse those words
}

//23

function describeAge(age) {
  return (
    "You're a(n) " +
    (age < 13 ? 'kid' : age < 18 ? 'teenager' : age < 65 ? 'adult' : 'elderly')
  );
}

//24

var cubeChecker = function (volume, side) {
  if (side <= 0 || volume <= 0) return false;
  console.log(volume ** (1 / 3));
  return Math.cbrt(volume) === side;
};

//25

function numberToPower(number, power) {
  let total = 1;
  for (let i = 1; i <= power; i++) {
    total = total * number;
  }
  return total;
  // Code here
}

//26

function mystery() {
  var results = { sanity: 'Hello' };
  return results;
}

//27

function powersOfTwo(n) {
  var myArray = [];
  for (var i = 0; i <= n; i++) {
    myArray.push(2 ** i);
  }
  return myArray;
}

const result = powersOfTwo(2);
console.log(result);

//28

function otherAngle(a, b) {
  return 180 - (a + b);
}

//29

function past(h, m, s) {
  const convertHours = h * 60 * 60 * 1000;
  const convertMinutes = m * 60 * 1000;
  const convertSeconds = s * 1000;
  return convertHours + convertMinutes + convertSeconds; //#Happy Coding! ^_^
}

//30

function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  return birds.filter((val) => geese.indexOf(val) === -1);
  // return an array containing all of the strings in the input array except those that match strings in geese
}

//31

function repeatStr(n, s) {
  let newString = '';
  while (n > 0) {
    newString += s;
    n--;
  }
  return newString;
}

//32

function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0;
}

//33

function grow(x) {
  let result = 1;
  for (let i = 0; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}

//34

function shortcut(string) {
  return string.split(/[aeiou]/g).join('');
}

//35

var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum; // Code here
};

//36

const square = function (x) {
  return x * x;
};

//37

function saleHotdogs(n) {
  if (n < 5) return n * 100;
  else if (n >= 5 && n < 10) return n * 95;
  else return n * 90;
}

//38

function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
}

//39

var countSquares = function (cuts) {
  {
    return cuts == 0 ? 1 : 6 * cuts * cuts + 2;
  }
};

//40

function multiply(a, b) {
  return a * b;
}

//41

String.prototype.toAlternatingCase = function () {
  var ns = '';
  for (var i = 0; i < this.length; i++)
    ns +=
      this.slice(i, i + 1) == this.slice(i, i + 1).toUpperCase()
        ? this.slice(i, i + 1).toLowerCase()
        : this.slice(i, i + 1).toUpperCase();
  return ns; // Define your method here :)
};

//42

function sumStr(a, b) {
  return (+a + +b).toString();
}

//43

function getAge(inputString) {
  return Number(inputString[0]); // return the girl's correct age as an integer. Happy coding :)
}

//44

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false;
  // TODO
};

//45

function isPalindrome(x) {
  var re = /[\W_]/g;
  var lowRegStr = x.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
  // your code here
}

//46

function sumStr(a, b) {
  return (+a + +b).toString();
}

//47

function bmi(weight, height) {
  let bmi = weight / (height ** 2)

    if (bmi <= 18.5) {

      return "Underweight";
    } else if (bmi <= 25.0) {

      return "Normal"
    } else if (bmi <= 30.0) {

      return "Overweight"
    } else if (bmi > 30) {
      return "Obese"
    }

//48

function htmlspecialchars(formData) {
  let arr = [];
  for (let i = 0; i < formData.length; i++){
    if (formData[i] == '<'){
      arr.push('&lt;');

    } else if(formData[i] == '>'){
      arr.push('&gt;');

    } else if(formData[i] == '"'){
      arr.push('&quot;');

    } else if(formData[i] == '&'){
      arr.push('&amp;');

    } else {
      arr.push(formData[i]);
    }
  }
return arr.join('');// Insert your code here
}

//49

a = "code"
b = "wa.rs"
name = a + b

//50

function switchItUp(number){
  return ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'][number];//Write your own Code!
  }

//51

function addFive(num) {
  var total = num + 5
  return num + 5
}

//52

function hoopCount (n) {
  if (n >= 10) {
   return "Great, now move on to tricks";
 } else {
   return "Keep at it until you get it";
 }//your code goes here
}

//53

function lovefunc(flower1, flower2){
  if(flower1 % 2 == 0 && flower2 % 2 == 1){
    return true;
}
 if(flower1 % 2 == 1 && flower2 % 2 == 0){
   return true;
}
else{
    return false;
    }// moment of truth
}

//53

function areYouPlayingBanjo(name) {
  if (name[0] === 'R' || name[0] === 'r') {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }// Implement me
  return name;
}

//54

function buildString(...template){
  return `I like ${template.join(', ')}!`

}

//55

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

//56

function removeChar(str){
  //You got this!
 return str.slice(1, -1)
 };

 //57

 function problem(x){
  let result = x * 50 + 6;
  if (isNaN(x) || x === '') {
    return 'Error';
  } else {
    return result;
  }//your code here
}

//58

function abbrevName(name){
  return (
     name
       // split the name into two words
       .split(" ")

       // take first char of both parts and capitalize them
       .map((part) => part[0].toUpperCase())

       // join both characters with a dot
       .join(".")
   );// code away
 }

 //59

 function fixTheMeerkat(arr) {
  var end = arr.shift();
 var begin = arr.pop();

 arr.push(end);
 arr.unshift(begin);

 return arr;//your code here
 }

//60

function monkeyCount(n) {
  var monkey = [];
    for (i = 1; i <= n; i++) {
      monkey.push(i);
    }
    return monkey;// your code here
  }

//61

function sumOfDifferences(arr) {
  return arr
    .sort((a, b) => b - a)
    .reduce((acc, curr, index, array) => {
      const next = array[index + 1];
      if (!isNaN(curr - next)) {
        acc += curr - next;
      }
      return acc;
    }, 0);
}

//62

function squareArea(A){
  return Number(Math.pow((A * 4) / (Math.PI * 2), 2).toFixed(2));
 }

 //63

 function enough(cap, on, wait) {
  return (on + wait < cap) ? 0 : on + wait - cap;// your code here
}

//64

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height// your code here
  }
}

//65

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return 2 * i;
}

//66

function basicOp(operation, value1, value2)
{
  if (operation == '+'){
        return value1+value2};
    if (operation == '-'){
        return value1-value2};
    if (operation == '*'){
        return value1*value2};
    if (operation == '/')
        {return value1/value2};
  // Code
}

//67

function quadratic(x1, x2){
  return [1, -(x2 + x1), x1 * x2];
}

//68

function check(a, x) {
  for (var i = 0; i < a.length; i++) {
         if (a[i] === x) {
             return true;
         }
     }
     return false; // your code here
 }

//69

function getRealFloor(n) {
  if (n <= 0) return n;
  if (n <= 13) return n - 1;
  return n - 2;
}

//70

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,
      b = v1;
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a =  v3, //set number value to a
      b =  v1; //set number value to b
  return a - b;
}

function equal3(){
  let a =  v1, //set number value to a
      b =  v5; //set number value to b
  return a * b;
}

function equal4(){
  let a =  v4, //set number value to a
      b =  v5; //set number value to b
  return a / b;
}

function equal5(){
  let a =  v6, //set number value to a
      b =  v3; //set number value to b
  return a % b;
}

//71

function cockroachSpeed(s) {
  let convert = s * 27.778;

if ( s >= 0) {

return Math.floor(convert);

}//Good Luck!
}

//72

function points(games) {
  var i = 0;
    var points = 0;
    for (i; i < games.length; i++) {
        let each = games[i].split(":");
        if (each[0] > each[1]) {
            points += 3;
        } else if (each[0] == each[1]) {
            points += 1;
        } else {
            points += 0;
        }
    }
    return points;
}

//73

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  let timeToPontoonPeople = pontoonDistance / youSpeed;
    let timeToPontoonShark = sharkDistance / sharkSpeed;
    let timeHalfSharkSpeed = sharkDistance / (sharkSpeed / 2);
    let timeDifferenceWithDolphin = timeHalfSharkSpeed - timeToPontoonPeople;
    let timeDifferenceWithoutDolphin = timeToPontoonShark - timeToPontoonPeople;

    if (sharkDistance < sharkSpeed) {
      return "Shark Bait!";
    } else if (pontoonDistance < youSpeed) {
      return "Alive!";
    }

    if (dolphin === true && timeDifferenceWithDolphin > 0) {
      return "Alive!";
    } else if (dolphin === true && timeDifferenceWithDolphin < 0) {
      return "Shark Bait!";
    } else if (dolphin === false && timeDifferenceWithoutDolphin > 0) {
      return "Alive!";
    } else {
      return "Shark Bait!";
    }
  }

//74

  function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false;//your function here
    }

//75

function sameCase(a, b) {

  if (a.match(/[a-z]/) && b.match(/[a-z]/)) {
    return 1;
  }
  if (a.match(/[A-Z]/) && b.match(/[A-Z]/)) {
    return 1;
  }
  if (b.match(/[a-z]/) && a.match(/[A-Z]/)) {
    return 0;
  }
  if (a.match(/[a-z]/) && b.match(/[A-Z]/)) {
    return 0;
  }
  return -1;
}

//76

function multipleOfIndex(array) {
  let res = [];

	// loop over the array
	for (let i = 0; i < array.length; i++) {
		// check if the current element (array[i]) is a multiple of it's index (i) and if it is...
		if (array[i] % i === 0) {
			// add it to the resulting array
			res.push(array[i]);
		}
	}

	return res;// good luck
}

//77

function multipleOfIndex(array) {
  let res = [];

	// loop over the array
	for (let i = 0; i < array.length; i++) {
		// check if the current element (array[i]) is a multiple of it's index (i) and if it is...
		if (array[i] % i === 0) {
			// add it to the resulting array
			res.push(array[i]);
		}
	}

	return res;// good luck
}

//78

function multiTable(number) {
  return `1 * ${number} = ${1*number}
2 * ${number} = ${2*number}
3 * ${number} = ${3*number}
4 * ${number} = ${4*number}
5 * ${number} = ${5*number}
6 * ${number} = ${6*number}
7 * ${number} = ${7*number}
8 * ${number} = ${8*number}
9 * ${number} = ${9*number}
10 * ${number} = ${10*number}`// good luck
}

//79

function typeOfSum(a, b) {
  return typeof(a + b);// good luck
}

//80

function excludingVatPrice(price){
  if ( price == null ) {
    return -1;
    } else {
    return +(price - (price / 115) * 15).toFixed(2);
    }// your code

}

//81

function maps(x){
  let newArr = [];
      for(let i = 0; i < x.length; i++){
          newArr.push(x[i] * 2);
      }
      return newArr;
  }

  //82

  function move (position, roll) {
    return position + roll * 2// return the new position
  }

  //83

  function removeEveryOther(arr){
    let result = [];
    for (let i = 0; i < arr.length; i+=2) {
      result.push(arr[i]);
    }
    return result;//your code here
  }

  //84

function DNAtoRNA(dna) {
   return dna.replace(/T/g, 'U');// create a function which returns an RNA sequence from the given DNA sequence
}

//85

function pillars(numPill, dist, width) {
  return (numPill > 1 ? (numPill-2) * width + (numPill - 1) * dist * 100 : 0)// your code here
}

//86

function amIWilson(p) {
  p = BigInt(p)
  return ((factorial(p - 1n)) + 1n) % (p * p) == 0n
}
function factorial(x) {
  if (x <= 1n){
    return 1n
  }
  return x * factorial(x - 1n)
}

//87

function howManydays(month){
  let days;
 switch (month){
 case 2:
 days=28;
 break;
 case 4:
 case 6:
 case 9:
 case 11:
 days=30;
 break;
 case 2:
 days=28;
 break;
 default:
 days=31;
 }
 return days;
 }

 //88

 function findMultiples(integer, limit) {
  return Array.from({length: parseInt(limit / integer)}, (_,index) => (index + 1) * integer)//your code here
}

//89

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

