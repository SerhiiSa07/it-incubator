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

